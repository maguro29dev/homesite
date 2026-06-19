# homesite

homeクラ 視聴者向けミニサイト（Netlify 専用・まぐにぃ情報ハブとは独立）

- ローカル: `C:\dev\homesite`
- GitHub: https://github.com/maguro29dev/homesite
- **公開 URL: https://homecra.netlify.app**

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

`src/data/content.ts` を編集 → `npm run build` → git push（Netlify 自動デプロイ）

- 期間限定企画: `timedPromotions[].visibleUntil` を過ぎると自動非表示
- スケジュール: Discord サーバーイベントが正本

---

## Netlify 設定メモ

- **サイト名:** `homecra` → **https://homecra.netlify.app**
- `homecraft.group` には載せない（MC 接続先 `mc.homecraft.group` と混同防止）

### 環境変数（Discord 同期）

| Key | Value |
|-----|--------|
| `DISCORD_BOT_TOKEN` | `C:\dev\discord-channel-manager\.env` と同じ |
| `DISCORD_GUILD_ID` | `1510533849166254161` |

変更後は **Clear cache and deploy site**。

### 動作確認

- https://homecra.netlify.app/
- https://homecra.netlify.app/guide/
- https://homecra.netlify.app/.netlify/functions/discord-events-proxy

---

## 他サイトからリンクする場合

```
https://homecra.netlify.app/guide/
```
