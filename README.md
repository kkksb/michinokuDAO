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

## ドキュメント

[基本設計](./docs/basic_design.md)
[開発ロードマップ](./docs/development_process.md)
[そのほか、利用できそうな情報](./docs/learn)
