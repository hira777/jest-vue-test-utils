# JestとVue Test Utilsを利用したコンポーネントの単体テストに関して

## 何をテストするのか

[一般的なヒント | Vue Test Utils](https://vue-test-utils.vuejs.org/ja/guides/common-tips.html)では以下のように記載されている。

>UI コンポーネントでは、コンポーネントの内部実装の詳細に集中しすぎて脆弱なテストが発生する可能性があるため、完全なラインベースのカバレッジを目指すことはお勧めしません。

>コンポーネントのパブリックインターフェイスを検証するテストを作成し、内部をブラックボックスとして扱うことをお勧めします。単一のテストケースでは、コンポーネントに提供された入力（ユーザーのやり取りやプロパティの変更）によって、期待される出力（結果の描画またはカスタムイベントの出力）が行われることが示されます。

つまり、コンポーネントのテストの考え方は通常の関数のテストと同じで、入力に対して出力（描画、イベントの発火、メソッドが動作したかなど）が正しいかどうかをテストすれば良い。

コンポーネントに無茶苦茶複雑な内部実装があったとしてもそれはテストする必要はない。

イメージとして以下のような感じ。

<img src="./media/image-of-testing-component.jpg" />

### テスト項目

コンポーネントにおいてのテスト項目（入力に対しての出力）は主に以下の通り。

- コンポーネントの描画内容が正しいか
- コンポーネントの属性やクラスが正しいか
- propsが正しく受け取れるか
- methodsが正しく動作するか
- 特定のイベントが発火した際に、正常に動作しているか
- $emitでイベントが正しく発⽕するか
- slotが正しく動作するか

## Note

babel7でvue-jestを利用するためには`babel-core@7.0.0-bridge.0`が必要。

- https://github.com/vuejs/vue-jest/issues/160
- https://github.com/vuejs/vue-jest/pull/173/files/21527df0d950b4cfe11e75b16003ca591d270332
