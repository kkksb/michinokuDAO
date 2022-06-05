# 概要

みちのくDAOの開発用のリポジトリです。

## 初期開発

まずは、ロゴのNFT化を目指します。

## コントラクトのデプロイ

```sh
cd michinoku-contract
truffle compile
truffle console
instance = await MichinokuMarket.new('testName', 'testSymbol')
instance.batchMint(<metadata uri>, <発行する個数>)
```