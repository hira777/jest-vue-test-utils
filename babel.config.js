module.exports = function(api) {
  api.cache(true);

  const presets = [
    [
      // プリセットに @babel/preset-env を指定する
      '@babel/preset-env',
      {
        // サポートするブラウザ、この設定に応じて、必要な polyfill のみが import される
        targets: '> 0.25%, not dead',
        // 必要な polyfill のみを import させたい場合、'usage'を指定する（必須）
        useBuiltIns: 'usage',
        // polyfill を利用する core-js のバージョンを指定する（指定しないとバージョン2が利用され警告が出力される）
        // corejs: 3,
        // Stage 4 未満のプロポーザルの polyfill も import される
        corejs: { version: 3, proposals: true }
        // trueにすると利用しているポリフィルなどの情報が出力される
        // polyfill が import されているかどうかを確認するためのものなので必須ではない
        // debug: true
      }
    ]
  ];

  return {
    presets
  };
};
