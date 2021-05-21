import React from "react"; //react読み込み
import ReactDom from "react-dom";
import App from "./App";
//Reactのコンポーネント名は語頭が大文字になるようにする

ReactDom.render(<App />, document.getElementById("root"));
