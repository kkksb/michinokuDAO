# 概要

Collab.landを使ってNFTをDiscordの認証トークにする。

## Bot誘致

1. 配置
https://discord.com/oauth2/authorize?client_id=704521096837464076&scope=bot&permissions=8
管理者権限が必要。

2. ロール設定

Collab.landについて、サーバ設定からロールを最上位にする。
この際、Collab.landにサーバに対する権限を渡す必要がある。

Required Permissions for Collab.Land Bot in Discord : Collab.land Support https://collabland.freshdesk.com/support/solutions/articles/70000626283-required-permissions-for-collab-land-bot-in-discord

このサイトにある通りに設定。
add reactionsも入れておくとよいかもしれない。

3. 専用ロール作成

作成するプライベートチャンネルに利用するロールを親切。

4. プライベートチャンネル創設

3のロールを追加したプライベートチャンネルを作る。

5. Botの設定

!setup roleを、Collab.land-configチャンネルで打つ。(Discordじゃなくても設定はできそう)
ここから、プライベートチャンネルに対するNFTトークンによる設定を行う

絵文字を押下して設定を行い、ロールなども選択する。
roleなどの設定をするコマンドは以下のようにう打つ。

```
<Contract Address> <最低NFT保持数> <最高NFT保持数> @<認証に利用するロール>
```

6. チャンネル内でBotをセットアップ

上記まで設定ができたら、パブリックチャンネルから!joinコマンドを打つ。
すると、うまくいけば認証に関するDMが飛んでくる。

※指定したNFTがWalletにないと認証はできないはず。

Token Permissioned Roles - Collab.Land https://collab-land.gitbook.io/collab-land/bots/discord/token-permissioned-roles

## 参考サイト

【保存版】特定のNFT保持者限定のDiscordの作り方について（チャンネル作成編）｜ユウキ｜note https://note.com/standenglish/n/n60e1d989ffee
ところどころ間違えている。

!helpで設定ができるとあるが、古い情報のようだ。

【保存版】特定のNFT保持者限定のDiscordの作り方について（ウォレット接続編）｜ユウキ｜note https://note.com/standenglish/n/n7149f4dcb1af

metamask - where to find the address of the NFT contract I created on opensea - Ethereum Stack Exchange https://ethereum.stackexchange.com/questions/113932/where-to-find-the-address-of-the-nft-contract-i-created-on-opensea