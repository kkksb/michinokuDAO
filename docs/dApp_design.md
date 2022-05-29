▼技術構成
フロントエンド: Next.js(React)
バックエンド[Web2]: Firebase
スマートコントラクト開発: Solidity, Truffle
スマコン操作: Bunzz
ブロックチェーンのデータフェッチ : Moralis Web3 API
その他Web3回りの操作: Ethers.js

▼イベントモニタリング
Firebase Cloud Functions + Moralis Web3 API

▼DBの方針
- NFTの一覧表示やソート/フィルタに必要な情報のみFirestore側で保持
- Firestoreは極力軽量化する

▼ユーザー認証
- MetaMask + Firebase

▼フィアット決済(入れるなら)
- Stripe(クレカ支払いだけでなくコンビニ支払い等も可能)

▼その他ツール
- Github
- Notion(タスク管理/PJ管理)