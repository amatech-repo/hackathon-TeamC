# プロダクト名
Commit Cat

## プロダクト説明

GitHub ✖️ たまごっちをイメージした開発モチベーション管理アプリです。
コミット数に応じて配布されるコインを使って、キャラクターを装飾し自分だけの相棒を作りましょう！

## チーム名

TeamC ねこまっしぐら

## 背景・課題・解決されること

プログラミングを習慣づけることの大変さを解決したいと考え、毎日のコミットで得られる達成感をもっと増幅させるアプリケーションによってそれらを解決したいと思い作成に至りました。

<!-- ## 操作説明・デモ動画

[デモ動画はこちら](https://www.youtube.com/watch?v=???)
開発したプロダクトの操作説明について入力してください。また、操作説明デモ動画があれば、埋め込みやリンクを記載してください -->

## 操作方法・デプロイ URL

<!-- 開発したプロダクトが動作するものであれば、操作方法や URL を入力してください。 -->
整備中

## 注力したポイント

整備中
<!-- 開発したプロダクトの中で、特に注力して作成した箇所・ポイントについて入力してください -->

## 使用技術
### Frontend
- TypeScript
- Next.js
- ChakraUI

### データベース
- Supabase

### GitHubとの連携
- Auth.js
- GraphQL

<!-- markdown の記法はこちらを参照してください ↓
https://docs.github.com/ja/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax -->



## ブランチ戦略

-   デフォルトブランチは`dev`です。
-   新機能や改善は`feat/`で始まるブランチを作成します。

## ブランチ作成からマージまで

差分を取り込む(今いるブランチを最新に最新に):

```bash
git pull origin dev
```

新しいブランチを作成:

```bash
git checkout dev
git pull origin dev
git checkout -b feat/機能名
```

開発後にコミットしてプッシュ:

```bash
git add .
git commit -m "feat: 機能の概要"
git push
```

GitHub で Pull Request を作成し、レビュー後に dev へマージ。

## コミットメッセージルール

```bash
feat: 新機能
fix: バグ修正
docs: ドキュメント変更
refactor: リファクタリング
style: コードの見た目変更
```

## 起動方法

依存パッケージをインストール:

```bash
npm install
```

開発サーバーを起動:

```bash
npm run dev
```

以下の URL にアクセス:

```bash
http://localhost:3000
```
