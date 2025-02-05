import React, {useState} from "react";
/*
 조건부 렌더링
react는 조건부의 렌더링 기준이 컴포넌트 단위도 가능

함수 -> 컴포넌트 내부의 에로우 function 을 이용한 함수
*/

// function MissGoal(){
//   return <h1>까비</h1>
// }

// function MadeGoal(){
//   return <h1>나이스샷</h1>
// }

// function App(props){
//   let isGoal = props.isGoal;
//   if(isGoal){
//     return <MadeGoal />; //컴포넌트 리턴시
//   }
//   return <MissGoal />;
// }



function App(props){
  console.log(props.test);
  const test = props.test;

  return (
    <>
      <h1>파라미터로 받아온 배열 요소의 갯수</h1>
      { test.length > 0 &&
        <h2>
          배열 요소의 갯수는 {test.length} 개 입니다.
        </h2>
      }
    </>
  );
}


export default App;