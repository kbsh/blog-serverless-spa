# blog-serverless-spa
ブログをサーバーレス＆SPAで提供したいな

！！開発中！！

## フロント採用技術
Typescript + React.js + Redux

## 環境構築
```
// gitリポジトリのclone
$ git clone git@github.com:kbsh/blog-serverless-spa.git

// リポジトリ直下に移動
$ cd blog-serverless-spa

// Dockerイメージの作成、ビルド
$ docker-compose up -d --build

// npmパッケージインストール
$ docker-compose run --rm app yarn install
```

## Scripts
```
// ts, tsxのコンパイル(development)
$ docker-compose run --rm app yarn build:dev

// ts, tsxのコンパイル(production)
$ docker-compose run --rm app yarn build

// ts, tsxの変更監視, コンパイル(development, watchモード)
$ docker-compose run --rm app yarn watch

// tslintの実行(コーディングチェック)
$ docker-compose run --rm app yarn lint

// ユニットテストの実行
$ docker-compose run --rm app yarn test
```
