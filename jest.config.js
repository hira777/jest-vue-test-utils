module.exports = {
  // 名前解決をするためのエイリアスの指定をする。
  // webpackの`resolve.alias`で`'@': path.resolve(__dirname, 'src')`みたいものを指定している場合
  // こちらにも指定しないと名前解決できないのでテストができない。
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
    '^vue$': 'vue/dist/vue.common.js'
  },

  // テスト対象の拡張子を指定する。
  moduleFileExtensions: ['js', 'vue', 'json'],

  // 正規表現にマッチしたファイルに対して実行するトランフォーマーを指定する。
  // トランフォーマーはプリプロセッサのこと。`babel-jest`、`vue-jest`、`ts-jest`などがそれに当たる。
  // Jest単体ではTypeScriptや`.vue`ファイルなどのテストができないため、それらをテストするために必要。
  transform: {
    '^.+\\.js$': 'babel-jest',
    '.*\\.(vue)$': 'vue-jest'
  },

  // snapshotSerializers（スナップショットを整形して読みやすくしてくれるやつ）を指定する。
  snapshotSerializers: ['jest-serializer-vue']
};
