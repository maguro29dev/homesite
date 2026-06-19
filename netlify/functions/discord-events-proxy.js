/**
 * Discord サーバーイベント → homesite スケジュール
 * Netlify 環境変数: DISCORD_BOT_TOKEN, DISCORD_GUILD_ID（任意）
 */

const GUILD_ID = (process.env.DISCORD_GUILD_ID || "1510533849166254161").trim();
const BOT_TOKEN = process.env.DISCORD_BOT_TOKEN;

const CORS_HEADERS = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, OPTIONS",
  "Content-Type": "application/json",
  "Cache-Control": "public, max-age=300, s-maxage=300",
};

function stripDiscordMarkup(text) {
  if (!text) return "";
  return text
    .replace(/<#[0-9]+>/g, "")
    .replace(/<@&[0-9]+>/g, "")
    .replace(/\*\*/g, "")
    .replace(/\n{3,}/g, "\n\n")
    .trim();
}

function firstLine(text, maxLen = 120) {
  const line = stripDiscordMarkup(text).split("\n").find((l) => l.trim()) || "";
  return line.length > maxLen ? `${line.slice(0, maxLen)}…` : line;
}

exports.handler = async (event) => {
  if (event.httpMethod === "OPTIONS") {
    return { statusCode: 204, headers: CORS_HEADERS, body: "" };
  }

  if (event.httpMethod !== "GET") {
    return { statusCode: 405, headers: CORS_HEADERS, body: JSON.stringify({ error: "method_not_allowed" }) };
  }

  if (!BOT_TOKEN) {
    return {
      statusCode: 503,
      headers: CORS_HEADERS,
      body: JSON.stringify({ error: "not_configured", events: [] }),
    };
  }

  try {
    const res = await fetch(`https://discord.com/api/v10/guilds/${GUILD_ID}/scheduled-events`, {
      headers: { Authorization: `Bot ${BOT_TOKEN}` },
    });

    if (!res.ok) {
      return {
        statusCode: res.status,
        headers: CORS_HEADERS,
        body: JSON.stringify({ error: "discord_api_error", events: [] }),
      };
    }

    const raw = await res.json();
    const now = Date.now();

    const events = raw
      .filter((ev) => {
        if (ev.status === 3 || ev.status === 4) return false;
        const end = ev.scheduled_end_time ? Date.parse(ev.scheduled_end_time) : null;
        if (end && end < now) return false;
        return true;
      })
      .sort(
        (a, b) =>
          Date.parse(a.scheduled_start_time || 0) - Date.parse(b.scheduled_start_time || 0)
      )
      .map((ev) => ({
        id: ev.id,
        name: ev.name,
        scheduledStartTime: ev.scheduled_start_time,
        scheduledEndTime: ev.scheduled_end_time,
        description: firstLine(ev.description),
      }));

    return {
      statusCode: 200,
      headers: CORS_HEADERS,
      body: JSON.stringify({ events, syncedAt: new Date().toISOString() }),
    };
  } catch (err) {
    return {
      statusCode: 500,
      headers: CORS_HEADERS,
      body: JSON.stringify({ error: "internal_error", events: [] }),
    };
  }
};
