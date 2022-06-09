# 概要

みちのくDAOの開発用のリポジトリです。

## 初期開発

まずは、ロゴのNFT化を目指します。

## コントラクトのデプロイ

```sh
cd michinoku-contract
truffle compile
instance = await MichinokuMarket.new('testName', 'testSymbol')
instance.batchMint(<metadata uri>, <発行する個数>)
```

## PJ管理

Issueでタスクを管理しています。
また、プロジェクトについては、「Project」というタグをつけたIssueで管理をしています。

進捗については当リポジトリの「Project」タブから確認してみてください。

## ドキュメント

[基本設計](./docs/discord_notification_design.md)

[開発ロードマップ](./docs/development_process.md)

[画面遷移図](./docs/UI/画面遷移図.png)

[そのほか、利用できそうな情報](./docs/learn)

[認証用のDiscordBot設定方法](./docs/procedure/DiscordとNFT連携.md)

[ブランチの切り方](./docs/branch_management.md)

