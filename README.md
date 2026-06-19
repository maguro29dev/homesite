# homesite

homeクラ 視聴者向けミニサイト（Netlify 専用・まぐにぃ情報ハブとは独立）

- ローカル: `C:\dev\homesite`
- 公開予定: **https://homekura.netlify.app**

- `/` … homeクラ について（コンセプト・Discord スケジュール）
- `/guide/` … 視聴者ガイドライン

## ローカル開発

```bash
cd C:\dev\homesite   # WSL: /mnt/c/dev/homesite
npm install
npm run dev               # http://localhost:4321
```

Discord 同期をローカルで試す場合（任意）:

```bash
cp .env.example .env
# .env に DISCORD_BOT_TOKEN を設定
npx netlify dev           # Functions 付きプレビュー
```

通常の `npm run preview` ではスケジュールはフォールバック表示になります。

## 文案の更新

`src/data/content.ts` を編集 → `npm run build`

- 期間限定企画: `timedPromotions[].visibleUntil` を過ぎると自動非表示
- スケジュール: Discord サーバーイベントが正本（下記 Netlify 設定）

---

## Netlify 初回セットアップ（運営作業）

### 1. GitHub リポジトリ作成

```powershell
cd C:\dev\homesite
git init
git add .
git commit -m "Initial homekura viewer site"
```

GitHub で空リポ `homekura-site` を作成し:

```powershell
git remote add origin https://github.com/<your-user>/homekura-site.git
git branch -M main
# 内容確認後に push（Cursor / 運営 GO 後）
git push -u origin main
```

### 2. Netlify で新サイト作成

1. [Netlify](https://app.netlify.com/) → **Add new site** → **Import an existing project**
2. GitHub の `homekura-site` を選択
3. ビルド設定（`netlify.toml` があるので自動検出されるはず）:
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
4. **Deploy site**

初回 URL 例: `https://random-name.netlify.app`

### 3. サイト名を `homekura` に変更

1. Netlify → 対象サイト → **Site configuration** → **General**
2. **Site details** → **Change site name**
3. **`homekura`** と入力 → 確定

公開 URL: **https://homekura.netlify.app**

（`homecraft.group` は MC 接続用のため **DNS には載せない**）

### 4. 環境変数（Discord 同期）

Netlify → **Site configuration** → **Environment variables** → **Add a variable**

| Key | Value |
|-----|--------|
| `DISCORD_BOT_TOKEN` | discord-channel-manager MCP と同じ Bot トークン |
| `DISCORD_GUILD_ID` | `1510533849166254161`（homeクラ：シーズン2） |

**Scopes:** Production（+ Deploy Previews も可）

保存後 → **Deploys** → **Trigger deploy** → **Clear cache and deploy site**

### 5. 動作確認

1. https://homekura.netlify.app/ を開く
2. スケジュールに Discord イベントが表示される（「キャッシュ表示」注記が **ない** こと）
3. https://homekura.netlify.app/guide/ でガイドライン確認

Function 直接確認:

```
https://homekura.netlify.app/.netlify/functions/discord-events-proxy
```

→ `{"events":[...], "syncedAt":"..."}` が返れば OK

---

## maguro-site 側

`maguro-site` から `/homekura/` は削除済み。情報ハブにリンクを載せる場合のみ、外部リンクとして:

```
https://homekura.netlify.app/guide/
```

---

## Bot 権限メモ

Scheduled Events 一覧取得に **Bot がサーバーに参加**していること。既存 `discord-channel-manager` Bot で `list_events` が動いていれば同じトークンで可。
