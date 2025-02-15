import { useState } from "react";
import InsertForm from "./InsertForm";
import PrintList from "./PrintList";

function Total() {
  const [userList, setUserList] = useState([]);

  const [userInfo, setUserInfo] = useState({
    name:'',
    addr:'',
    age:'',
  })

  const updateUserInfo = (newUserInfo) => {
    setUserList( (prevList)=>[
      ...prevList,
      newUserInfo
    ]); // 자식이 전달한 데이터를 업데이트
  };

  const testTitle = <h1>useRef Test</h1>;;
  const testDetail = <p>자식 컴포넌트에서 입력한 폼 데이터값을 다른 자식 컴포넌트로 전달하는지 확인</p>;
  const testResult = <p>리액트는 단방향으로 자식컴포넌트에서 부모컴포넌트로 데이터 전달 불가 </p>;
  const testResult2 = (
    <>
      <p>자식 컴포넌트는 부모 컴포넌트의 state를 직접 변경할수 없기 때문에</p>
      <p>콜백을 통해 변경해야함.</p>
    </>
  );
  const testResult3 = (
    <>
      <p>또한 jsx문법은 하나의 부모 요소로 감싸야하기 때문에</p>
      <p>문법 오류를 제거하기 위해서 div태그로 감싸야할수있음</p>
      <p>그렇게된다면 불필요한 div태그가 많이 생길 수 있기때문에</p>
      <p>그래서 나온게 바로 &lt;&gt;  &lt;/&gt; 플래그먼트</p>
    </>
  );

  const useRefResult = (
    <>
      <h3> useRef ? </h3>
      <p> 1. useRef는 컴포넌트가 리렌더링될 때마다 값이 유지되는 참조 객체를 만듦</p>
      <p> 2. useRef는 상태(state)와 달리 렌더링을 트리거하지 않으면서 값을 추적가능</p>
      <p> ex) 컴포넌트가 리렌더링되는 동안 변경된 값을 기억하고 싶지만,</p>
      <p> 그 값으로 인해 리렌더링을 일으키고 싶지 않을 때 유용.</p>
    </>
  );
      

  return (
    <>
      <div>
        {testTitle}
        {testDetail}
        {testResult}
        {testResult2}
        {testResult3}
        {useRefResult}
      </div>
      {/* InsertForm에 setUserInfo를 props로 전달 */}
      <InsertForm onUpdateUser={setUserInfo} />
      {/* PrintList에 userInfo를 전달 */}
      <PrintList userList={userList} />
    </>
  );
}

export default Total;
