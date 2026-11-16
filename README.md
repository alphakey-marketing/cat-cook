# 貓咪食堂 Cat-Cook

網站：https://cat-cook.keymarketing.vip

Vite + three.js 靜態網站，部署喺 Cloudflare（Workers 靜態資產）。

## 開發

```
npm install
npm run dev        # 本機開發
npm run build      # 輸出到 dist/
npm run voice      # 生成語音
```

## 部署（Cloudflare）

```
npm run deploy
```

即係 `vite build`，再用 `wrangler deploy` 上傳 `dist/`。設定喺 `wrangler.jsonc`：

- Worker 名：`cat-cook`
- 網站資料夾：`./dist`
- 網域：`cat-cook.keymarketing.vip`（custom domain，DNS 由 Cloudflare 自動管理）
- `not_found_handling: single-page-application`

注意：
- 第一次要登入：`npx wrangler login`（之後 token 會記住）。
- `dist/` 有 9000 幾個檔，首次上傳大約 12 分鐘，之後只傳有改嘅檔。
- 唔使經 GitHub 部署。舊嘅 `gh-pages` branch 已經停用。
- 喺呢個資料夾行 `wrangler` 嘅 `pages` 指令，會因為偵測到 Vite 而自動改設定。部署一律用 `npm run deploy`。

## 唔喺 git 入面嘅嘢

- `content/`：約 863 個字幕 txt（約 300MB），已加入 `.gitignore`，只喺本機。
- 備份喺 `D:\Git\Cat-Cook-private`：
  - `content/`：`content/` 嘅副本
  - `backup/cat-cook-before-clean.bundle`：清理 `content/` 之前嘅完整舊 git 歷史
  - `tools/`：舊 deploy 同輔助 scripts

## 歷史備註

2026-11：將 `content/` 由 git 歷史移除並 force push 到 `main`，所以舊 commit hash 同而家唔同。要睇舊歷史，用上面個 bundle：

```
git clone D:\Git\Cat-Cook-private\backup\cat-cook-before-clean.bundle old-cat-cook
```
