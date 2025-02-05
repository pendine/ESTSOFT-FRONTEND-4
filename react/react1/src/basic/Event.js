import React from "react";

/**
Event
일반 함수로 선언하기보다 arrow function을 적극적으로 활용

리액트에서도 이벤트 객체를 다를 수 있음
다만 바닐라 JS는 인라인 이벤트 핸들러에 이벤트 객체 선언시
event라는 풀네임으로 작성해야하지만
react에서는 addEventListener를 쓰듯이 사용해도 문제 없음
 */

function Shoot (){

  let shot = (param, event) =>{
    alert(`${param} 사장님 나이스샷`);
    alert( event.type );
    alert( event.target );
  }

  return (
    <button onClick={(event) => shot("파라미터", event)}>힘껏 치세요</button>
  );
}

export default Shoot;