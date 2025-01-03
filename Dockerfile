# 使用するNode.jsのバージョンを指定
# Node.jsのバージョン14を使用します
FROM node:14

# 作業ディレクトリを指定
# このディレクトリにコードを配置し、作業します
WORKDIR /usr/src/app

# パッケージのインストールに必要なファイル(package.json, package-lock.json)をコピー
COPY package*.json ./

# 必要なNode.jsパッケージをインストール
RUN npm install

# 残りのソースコードをコンテナ内にコピー
COPY . .

# アプリケーションがリッスンするポートを指定
# 通常、Node.jsアプリケーションは8080ポートで実行されます
EXPOSE 8080

# アプリケーションを起動
# "npm start"コマンドで、package.jsonに記載されているstartスクリプトを実行します
CMD [ "npm", "start" ]
