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

作成するプライベートチャンネルに利用するロールを新設。

4. プライベートチャンネル創設

3のロールを追加したプライベートチャンネルを作る。

5. Botの設定

https://cc.collab.land/
こちらのTGRから、認証に使用するNFTを選択する

※OpenSeaの場合、Mainetを選択すると良い。

6. チャンネル内でBotをセットアップ

collabland-joinチャンネルに移動して、「Let's go」ボタンを押下。

すると、うまくいけば認証に関するDMが飛んでくる。

※指定したNFTがWalletにないと認証はできないはず。

Token Permissioned Roles - Collab.Land https://collab-land.gitbook.io/collab-land/bots/discord/token-permissioned-roles
Discord Bot Walkthrough : Collab.land Support https://collabland.freshdesk.com/support/solutions/articles/70000036689-discord-bot-walkthrough

## Discordサーバでの認証方法(テスト)

1. 
collabland-joinチャンネルに移動する。
「Let's Go」があるので、押下。

2. 
案内にしたがって操作。Verifyボタンを押下。

3. Discordチャンネルに戻ると、「No roles granted...」と表示される。

4. 「NFTホルダー向け」というチャンネルが見えなければ、成功。

## 参考サイト

【NFTコミュニティ】DiscordでNFT保有者限定コミュニティを作る方法 | コヤブログ https://koyablogs.com/how-to-make-nft-holder-channel-in-discord/#3

metamask - where to find the address of the NFT contract I created on opensea - Ethereum Stack Exchange https://ethereum.stackexchange.com/questions/113932/where-to-find-the-address-of-the-nft-contract-i-created-on-opensea