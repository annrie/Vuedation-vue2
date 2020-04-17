# Vuedation

日本語 | [English](./README.md)

> Foundation for Sites と VueJS を統合したボイラープレート（フェーズ II）

<p align="center"><img src="https://user-images.githubusercontent.com/5172584/79530197-9f613e00-80a9-11ea-9903-c6eba751330e.png" alt="site image"></p>

このリポジトリは、[Vue 単一ページアプリケーション](https://jp.vuejs.org)で[Foundation for Sites](https://get.foundation/sites/docs/)を使用する方法の例です。 プロジェクトは、webpack と babel, vue-cli を使用したテンプレート（フェーズ Ⅱ）です。それぞれ最新版を使うことをポリシーとしています。
（フェーズ Ⅰ は[こちら(Foundation-Vue)](https://github.com/annrie/Foundation-Vue.git)を参照してください）

フェーズ Ⅰ では、Foundation に Vue の機能を付け足す程度のものでしたが（静的ファイルコンパイラーとして Foundation 標準の Panini を使っている等）、フェーズ Ⅱ では本格的に Vue の仕様に準じてページを作成していけるように Foundation はあくまでもプラグイン的な位置付けとしています（上記の Panini の代わりに Vue 謹製の Vue Router や Vuex を使用しています）。

## 開発の動機

Foundation フレームワークと Vue.JS を連携させたかった。
[Setting up Vue 2 and Foundation 6](https://medium.com/@tommaso.marcelli/setting-up-vue-2-and-foundation-6-3f858b4ad20#.mfkp11mid)と[vue-webpack4-babel7](https://github.com/xsbear/vue-webpack4-babel7/)が大変参考になりました。この二つがなければ進めることはできなかったでしょう。感謝します。

## セットアップ

テンプレートを手動でセットアップするには、まず Git でダウンロードします。

```bash {.copy}
git clone git@github.com:annrie/Vuedation.git projectname
cd projectname
```

## インストール

その後、コマンドラインでフォルダを開き、必要な依存関係をインストールします。
npm も使えますが、[yarn2](https://yarnpkg.com/getting-started/install) を使用しています。

```bash
＃ install dependencies
yarn set version berry # yarn2のセットアップ
yarn
```

最後に、 `yarn dev` を実行して サーバーを立ち上げます。 完成したサイトは、次の URL で表示可能な `dist`というフォルダーに作成されます。

```bash
http://localhost:8888
```

ビルドするには、次を実行します `yarn build`。

## ライセンス

[MIT](https://github.com/annrie/Vuedation/blob/master/LICENSE)
Copyright &copy; 2020-present, Annrie
