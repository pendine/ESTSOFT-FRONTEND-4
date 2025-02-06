import React, { useState } from 'react';

// 요구사항:
// 1. "한국어", "영어", "일본어" 버튼을 만드세요
// 2. 각 버튼을 클릭하면 해당 언어로 인사말이 표시되게 만드세요
//    - 한국어: 안녕하세요
//    - 영어: Hello
//    - 일본어: こんにちは
// 3. 현재 선택된 언어를 표시하세요
// 4. 처음 페이지가 로드될 때는 "언어를 선택해주세요"라고 표시하세요

function Greeting() {
  // 여기에 코드를 작성하세요

  const [msg, setMsg] = useState("언어를 선택해 주세요");

  return (
    <>
      <p>{msg}</p>
      <button onClick={(e) => setMsg("안녕하세요")}>한국어</button>
      <button onClick={(e) => setMsg("Hello")}>영어</button>
      <button onClick={(e) => setMsg("こんにちは")}>일어</button>
    </>
  );
}
// export default Greeting;

// 요구사항:
// 1. "안녕하세요" 텍스트를 보여주세요
// 2. 크게, 작게 버튼을 만드세요
// 3. 크게 버튼을 누르면 글자가 5px씩 커지고, 작게 버튼을 누르면 5px씩 작아지게 만드세요
// 4. 현재 폰트 크기를 px 단위로 함께 표시해주세요

function FontSizeChanger() {
    // 여기에 코드를 작성하세요
  
  const [fontSize, setFontSize] = useState(16);
  
  
  return (
    <>
      <button onClick={(e) => setFontSize( fontSize+ 5)}>크게</button>
      <button onClick={(e) => setFontSize( fontSize- 5)}>작게</button>
      <p>font size : {fontSize}</p>
      <p style={{ fontSize : fontSize+'px' }}>안녕하세요</p>
      
      
    </>
  );
}
  

export default FontSizeChanger;