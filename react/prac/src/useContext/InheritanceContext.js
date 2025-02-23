import { createContext } from "react";

// createContext는 공유해야하는 초기값을 인수로 받을수 잇음
/* ex)
createContext(
  {
    id:1,
    property:'대저택',
  }
);

빈 객체를 지정하거나 초기값을 입력하지 않아도됨.
리액트 컴포넌트인 속성을 포함하기 때문에 
보통 대문자로 시작하는 변수에 저장
*/
const InheritanceContext = createContext({
  id: 1,
  property: "대저택",
});

export default InheritanceContext;
