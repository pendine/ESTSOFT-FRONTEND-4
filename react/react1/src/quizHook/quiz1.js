import React from 'react';

// 아래의 코드에서 개선사항이 있는지 확인해볼것.
function Profile(props) {
  // Q.
    // return (
    //   <div>
    //     <h2>{props.name}</h2>
    //     <p>나이: {props.age}</p>
    //   </div>
    // );
    // A : 프레그먼트 사용하여 개선
    return (
      <>
        <h2>{props.name}</h2>
        <p>나이: {props.age}</p>
      </>
    );
  }
  
  function App() {
    return (
      <div>
        <Profile name="철수" age="열살" />
      </div>
    );
  }

//퀴즈2 : 이 코드는 동작하지 않는데 그 이유를 설명하고 변경하세요.
// jsx 문법위반
  function Greeting({ isLoggedIn }) {
    // Q. 
    // return (
    //   <div>
    //     isLoggedIn ? "환영합니다!" : "로그인해주세요"
    //   </div>
    // );
    // A: 중괄호를 미사용하여 변수화 하지 않음
    return (
      <div>
        {isLoggedIn ? "환영합니다!" : "로그인해주세요"}
      </div>
    );
  }
export default App;