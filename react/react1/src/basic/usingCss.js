import React from "react";
import styles from "./test.module.css";
import './test.scss';

function App(){

  const freeStyle = {
    color : "white",
    backgroundColor : "lightcoral",
    padding: "15px",
    fontFamily: "Sans-Serif",
  };

  return (
    <>
      {/* 인라인 스타일 속성 적용시 중괄호 두개 */}
      {/* <h1 style={{color:"red"}}>Red</h1> */}
      {/* <h1 style={freeStyle}>Red</h1> */}

      <h1 className={styles.test}>모듈 CSS 를 붙일때는 클래스네임을 작성시 규칙이 있음</h1>
      <h1>Compared</h1>
    </>
  );
}


export default App;