import React from "react";
import { memo } from "react";

const Todos = ({todos, addTodo}) => {
  console.log("test");

  return(
    <>
      <h1>할일 목록</h1>
      {todos.map((todo, index) => {
        return <p key={index}>{todo}</p>;
      })}
      <button onClick={addTodo}>Add Todo</button>
    </>
  );
}

// 메모리제이션 처리
// props가 변경된 경우만 리렌더링 처리를 위한 방법
// memo를 사용하여 컴포넌트를 기억시키는 기법
export default memo(Todos);