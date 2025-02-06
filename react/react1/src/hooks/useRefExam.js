import React, { useEffect, useRef, useState} from 'react';

// ref 를 활용하여 input창에 입력한 숫자의 갯수를 체크하려했으나
// 내용을 지울때에도 카운트가 올라가는것을 확인 할 수 있음
// 이유 : ref의 count는 렌더링시 증가

// function App() {
//   const [inputValue, setInputValue] = useState("");
//   const count = useRef(0);

//   useEffect(() => {
//     count.current = count.current + 1;
//   });

//   return (
//     <>
//       <input
//         type="text"
//         value={inputValue}
//         onChange={(e) => setInputValue(e.target.value)}
//       />
//       <h1>Render Count: {count.current}</h1>
//     </>
//   );
// }

// export default App;

// ref를 활용하여 div의 색상을 랜덤하게 변경
// function MagicBox(){
//   const boxRef = useRef();

//   const changeColor = () =>{
//     // boxRef.current => 요소 선택
//     // style.backgroundColor => DOM traversing
//     boxRef.current.style.backgroundColor =
//     '#' + Math.floor(Math.random() *16777251).toString(16);
//   }

//   return(
//     <div>
//       <div
//         ref={boxRef}
//         style={{
//           width:'250px',
//           height:'250px',
//           backgroundColor:'lightcoral',
//           margin:'25px',
//         }}
//       >

//       </div>
//       <button onClick={changeColor}>
//         click
//       </button>
//     </div>
//   );
// }
// export default MagicBox;


function App() {
  const [inputValue, setInputValue] = useState("");
  const previousInputValue = useRef("");

  useEffect(() => {
    previousInputValue.current = inputValue;
  }, [inputValue]);

  return (
    <>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <h2>Current Value: {inputValue}</h2>
      <h2>Previous Value: {previousInputValue.current}</h2>
    </>
  );
}


export default App;