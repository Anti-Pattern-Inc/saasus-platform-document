# SaaSus Platform Document

This website is built using [Docusaurus 2](https://docusaurus.io/), a modern static website generator.

[wiki](https://github.com/Anti-Pattern-Inc/saasus-platform-document/wiki)

### Installation
１、saasus-dev-envリポジトリのディレクトリへ移動
```
cd saasus-dev-env
```
２、saasus-platform-documentリポジトリをcloneする
```
git clone git@github.com:Anti-Pattern-Inc/saasus-platform-document.git
```
３、リポジトリに移動
```
cd saasus-platform-document
```
4、apiのymlファイルをコピーしてくる
```
sh copy.sh
```
５、コンテナを立ち上げる
```
docker-compose up -d
```
６、コンテナへ入って、npm installを実行
```
docker exec -it {コンテナID} bash
/usr/src/app# npm install
```
７、開発サーバー立ち上げ、localhost:3000でアクセスできる
```
npm run start -- --host 0.0.0.0
```


### Build

```
$ npm run build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Deployment

Using SSH:

```
$ USE_SSH=true npm run deploy
```

Not using SSH:

```
$ GIT_USER=<Your GitHub username> npm run deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.
