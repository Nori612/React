import React from "react";
// props使い方
const Coloful = (props) => {
  // 分割代入を使用する
  const { color, text } = props;
  const Style = {
    color: color,
    fontSize: "18px"
  };
  // propsのchildrenを指定するとタグで囲ったテキストを取得
  return <p style={Style}>{text}</p>;
};

export default Coloful;
