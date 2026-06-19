/**
 * homeクラ ミニサイト — 文案正本
 * 更新: このファイル → npm run build
 */
export const siteMeta = {
  name: "homeクラ",
  updatedAt: "2026-06-19",
} as const;

/** ヘッダー: homecra_logo（sirokuru.net） / アイコン: Discord サーバーアイコン */
export const branding = {
  headerLogoPath: "/logo-header.png",
  iconPath: "/icon.png",
  logoAlt: "homeクラ",
  themeColor: "#663710",
} as const;

export const aboutPage = {
  title: "homeクラ について",
  description: "配信者専用 Minecraft サバイバル homeクラ の概要とスケジュール。",
  lead:
    "配信者・クリエイターが同じワールドで遊ぶ **Minecraft Java 版サバイバルサーバー** です。",
  audienceNote:
    "※視聴者参加型ではありません。配信・動画・X などから楽しんでください。",
} as const;

/** Discord #💡コンセプト ベース */
export const conceptSections = [
  {
    heading: "原点回帰",
    body: "ただのサバイバルから生まれる、予測不能な面白さを大切にしています。",
  },
  {
    heading: "「家」",
    body: "あなたの「家」なので homeクラ。参加者にとってはログインするもしないも自由で、実家のような安心感を目指しています。",
  },
  {
    heading: "スパイスとしての「共同建築」",
    body: "Litematica 連携や Syncmatica により、大規模な共同建築も可能です。配信では「でっかい城をみんなで作る」ような絡みも見られます。",
  },
  {
    heading: "大まかな造り",
    body: "基本バニラに近い体験を重視し、Minecraft 本来の楽しさを引き出すサバイバルサーバーとして設計しています。",
  },
  {
    heading: "イベント",
    body: "参加者が主体でイベントや企画を起こすことを歓迎しています。視聴者の方は、その様子を配信から楽しんでください。",
  },
] as const;

export const guidePage = {
  title: "視聴者ガイドライン",
  description:
    "homeクラ を視聴する際のマナー。鳩行為・ネタバレ・#homeクラネタバレ の使い方。",
  intro:
    "複数の配信者が同じワールドで遊ぶ homeクラ では、**鳩行為**や**ネタバレ**が特にトラブルになりやすいです。以下を目安にしてください。",
} as const;

export const viewerGuidelines = {
  coreRule: {
    title: "鳩・ネタバレの基本",
    body:
      "**原則 NG** です。例外は **配信者本人がリスナーに「教えて」「聞いて」と尋ねたときだけ** です。",
    hatoNote:
      "**鳩（はと）** とは、A さんの配信で得た情報を、B さんの配信のコメント欄など **別の配信者の場** に持ち込む行為です（伝書鳩のイメージ）。配信者が口から言っていない別枠の情報を、視聴者が先回りして教えるのも鳩・ネタバレにあたります。",
    examples: [
      "NG: 「さっき ○○ さんが △△ 言ってたよ」（配信者が聞いていない別枠の話）",
      "NG: 他の配信で見た進行・座標・出来事を、この配信のコメントで先取りして教える",
      "OK: 配信者が「他の人の配信で何かあった？」と視聴者に質問したときに答える",
      "OK: その配信内で既に話題になっている内容の整理・補足",
    ],
  },
  spoilerHashtag: {
    title: "ネタバレを X に書くとき",
    hashtag: "#homeクラネタバレ",
    body:
      "どうしても X など配信外に homeクラ のネタバレを書く必要があるときは、必ずハッシュタグを付けてください。見たくない人が避けやすくなります。",
    usage: [
      "投稿文の先頭か末尾に **#homeクラネタバレ** を付ける",
      "本文に「ネタバレ注意」なども添えるとより親切",
      "配信者のコメント欄やライブチャットでは、ハッシュタグの代わりに書かない・鳩にしない方が基本",
    ],
  },
  dos: [
    "配信者・参加者・他の視聴者へのリスペクトを大切に",
    "配信や動画のネタバレは、タイトル・サムネ・コメントで配慮する",
    "批判や攻撃ではなく、応援やユーモアで盛り上げる",
    "配信者が鳩・ネタバレ OK と明示した場面（企画・コラボ等）以外は、原則として情報を運ばない",
  ],
  donts: [
    "配信者が尋ねていない鳩・ネタバレ（別枠の情報の持ち込み）",
    "参加者の個人攻撃・過度なネガティブ連投",
    "配信・コメント欄での荒らし・スパム",
    "未公開の座標・内部情報の拡散（配信者が公開していない内容）",
    "「なぜ自分は入れないの」等、参加者以外への不当なプレッシャー",
  ],
} as const;

export const discordEventsFallback = [
  {
    id: "1516726174091579492",
    name: "homeクラ 開始",
    scheduledStartTime: "2026-07-01T21:00:00+09:00",
    scheduledEndTime: "2026-07-01T23:59:59+09:00",
    description: "7/1（水）21:00 JST から homeクラ が本格開始。初期スポーンで全員集合・エリアガチャ。",
  },
  {
    id: "1516726185642557471",
    name: "ネザー解禁",
    scheduledStartTime: "2026-07-15T21:00:00+09:00",
    scheduledEndTime: "2026-07-15T23:59:59+09:00",
    description: "開始から約2週間後、ネザーへの移動が解禁されます。",
  },
  {
    id: "1516726198867197992",
    name: "エンド解禁",
    scheduledStartTime: "2026-08-01T21:00:00+09:00",
    scheduledEndTime: "2026-08-01T23:59:59+09:00",
    description: "開始から約1ヶ月後、エンドへの挑戦が解禁されます。",
  },
] as const;

export const discordEventsConfig = {
  guildId: "1510533849166254161",
  apiPath: "/.netlify/functions/discord-events-proxy",
} as const;

/** 期間限定企画（S2 一般公開前は空。イベント確定後に追記） */
export const timedPromotions = [] as const;

export const streamerParticipation = {
  title: "配信者として参加したい方へ",
  body:
    "homeクラ は配信者・クリエイター向けのサーバーです。**現時点では参加者の募集は行っていません。** 配信者として参加を希望される方向けのガイドラインは、今後まとめる予定です。",
} as const;

/** 参加者制作サイト（sirokuru.net） */
export const participantSite = {
  title: "参加者の紹介ページ",
  body:
    "しろくるさんが有志で制作・公開してくれている homeクラ 紹介サイトです。メンバー一覧などはこちらもご覧ください。",
  thanks: "まじナイス！",
  note: "※運営とは別サイトです。内容は更新されない場合があります。",
  url: "https://sirokuru.net/homecra/",
  linkLabel: "しろくるさんの homeクラ ページ ↗",
} as const;

/** ネタバレセクション内: X ハッシュタグリンク */
export const xHashtagLinks = [
  {
    tag: "#homeクラ",
    label: "#homeクラ",
    note: "homeクラ 全般",
    url: "https://x.com/hashtag/homeクラ",
  },
  {
    tag: "#homeクラネタバレ",
    label: "#homeクラネタバレ",
    note: "ネタバレ投稿用 — 閲覧注意",
    url: "https://x.com/hashtag/homeクラネタバレ",
    warn: true,
  },
] as const;
