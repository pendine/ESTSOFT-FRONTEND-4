/** 
구성요소 렌더링 관리 기법
 -> props 가 전달(변경)이 되지 않으면
    react가 구성요소 렌더링을 생략

useMemo, useCallback
 - 메모리에 값을 등록하여 다시 계산할 필요 없도록 하는 개념

useMemo, useCallback를 사용하는 이유
 - 성능최적화, 불필요한 실행 방지

memo : 계산한 값을 기억하는 훅
       답을 미리 계산해뒀다 필요할때 꺼내보는 개념
callback : 함수 자체를 기억하는 훅
           문제풀이 자체를 기억하는 개념

참조 평등
 -> 같은 컴포넌트에 있는 함수의 이벤트가 발생했을시
    다른 컴포넌트 함수의 내용도 재 랜더링 되는 개념

useMemo Hook이 있고 리액트에는 Memo라는 개념도 존재
  - 결과를 기억하는 기법(메모리제이션)
  - 컴포넌트의 리렌더링 없이 마지막으로 렌더링된 결과를 재사용
  - state, context가 변할때 리렌더링됨.

useMemo, useCallback은 메모리 관리 전략
주의사항
1. 남용하면 안쓰느니 못함
 - 너무 자주 사용하면 문제가 될 수 있음
   복잡한 코드에서 강력한 성능 전략을 발휘하는것임. 단순연산 X
2. 의존성 배열 관리 필요
 - 필요한 의존성만 포함시켜야함
   객체나 배열을 분해하여 사용
3. 의존성 배열을 함수형 업데이트(set~)를 활용하면 줄일 수 있음
*/

// useCallback 예시
import React, { useCallback, useReducer, useState, useMemo } from "react";
import Todos from './useMemoTodo.js';
/*
function Callback() {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([]);


// Todos에 Memo를 import하지 않으면
// 카운트증가 버튼을 클릭해도 같은 컴포넌트에서 활용되고 있으므로
// 이 컴포넌트의 동일한 컴포넌트이므로 todo의 영역이 리렌더링됨. 
  const increment = () => {
    setCount((c) => c + 1);
  };


  // useCallback을 사용함으로써 리렌더링 방지
  // 필요할때만 렌더링되도록 useCallback hook을 활용
  const addTodo = useCallback( () => {
    // 계속 Todos의 내용들을 호출하고 리렌더링함.
    setTodos((t) => [...t, "새로운 할일"]);
    // 의존성 배열을 통해 todos의 변경을 감지했을때만
    // 처리되도록 진행
  }, [todos])

  return (
    
  // 버튼을 클릭했을때 Todos에서 참조 평등 발생함  
    <>
      <Todos todos={todos} addTodo={addTodo} />
      <div>
        count : {count}
        <button onClick={increment}>+</button>
      </div>
    </>
  );
}

export default Callback;
*/

/*
function SqlCal(){

  const [number, setNumber] = useState(1);

// 변수 squareNumber, memoSqu의 차이점
// 결과는 동일
// squareNumber : 어떤 이벤트가 발생되도 리렌더링
// memoSqu : number의 내용이 변할때만 리렌더링

// memo, useMemo 혹은 불필요한 실행을 막을 수 있음

  //  squareNumber : 이방식은 매번 결과를 리턴
  const squareNumber = number * number;

  // 메모 활용
  const memoSqu = useMemo( () => {
    console.log("꼐싼");
    return number * number;
  }, [number]);

  return(
    <div>
      <input 
        type="number"
        value={number}
        onChange={(e) => setNumber(Number(e.target.value))}
      />
      <p>제곱값 : {squareNumber}</p>
      <p>제곱값 : {memoSqu}</p>
    </div>
  );
}
export default SqlCal;
*/

// useMemo, useCallback을 활용하는 리액트 성능 최적화 전략
// 1. 의존성 배열의 선언과 최적화
// function OptimizedComponent({ data, onUpdate }) {
//   // 의존성 배열에 필요한 값만 포함
//   const processData = useCallback(() => {
//     // 데이터 처리 로직
//   }, [data]); // onUpdate는 제외
// 
//   const heavyCalculation = useMemo(() => {
//     // 복잡한 계산 로직
//   }, [data.id]); // data 전체가 아닌 필요한 속성만 포함
// }

// 2. 조건문 메모리제이션
// function ConditionalMemo({ data, threshold }) {
//   const expensiveValue = useMemo(() => {
//     if (data.length < threshold) {
//       // 데이터가 적을 때는 직접 계산
//       return calculateSimple(data);
//     }
//     // 데이터가 많을 때만 메모이제이션 사용
//     return calculateComplex(data);
//   }, [data, threshold]);
// }

// 3. 중첩 메모리제이션 처리
//function NestedMemoization({ data }) {
    // 1단계 데이터 처리
//     const processedData = useMemo(() => {
//       return data.map(item => ({
//         ...item,
//         processed: true
//       }));
//     }, [data]);
  
//     // 2단계 데이터 처리
//     const finalData = useMemo(() => {
//       return processedData.filter(item => item.value > 0);
//     }, [processedData]);
  
//     // 처리된 데이터를 사용하는 함수
//     const handleDataOperation = useCallback((id) => {
//       const item = finalData.find(item => item.id === id);
//       // 작업 수행
//     }, [finalData]);
  
//     return (
//       <div>
//         {finalData.map(item => (
//           <DataItem
//             key={item.id}
//             data={item}
//             onOperation={handleDataOperation}
//           />
//         ))}
//       </div>
//     );
//   }

