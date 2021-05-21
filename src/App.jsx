import React from "react";
import Coloful from "./components/Coloful";
//パーツごとにファイルを分けるのがReactの基本（コンポーネント）
// コンポーネント用にjsxの拡張子にするのが良い(jsでも問題ない)

//  Reactで要素を表示する場合
// 一つの親要素に纏めなければならない(divなど)
// 但しdivなど不要な場合は以下の要素で囲えば良い
// 空の<>で囲っても同じ効果が成り立つ
const App = () => {
  const onClickButton = () => alert();
  return (
    // <React.Fragment>
    <>
      {/* 以下の二重{}はJSを記す宣言とオブジェクトを囲う{} */}
      <h1 style={{ color: "red" }}>こんにちは！</h1>
      <Coloful color="blue" text="お元気ですか" />

      {/* <Coloful color="red">元気です</Coloful> children使用例*/}
      {/* 属性を付ける時、属性名の指定は語頭が大文字になる */}
      {/* {}で囲えばjsのコードを記述出来る */}
      <button onClick={onClickButton}>ボタン</button>
    </>
    // </React.Fragment>
  );
};

// 関数のエクスポート
export default App;
