import React, { createContext, useContext, useState} from 'react';
/*
컨텍스트 사용법
*/
/**
전역에 생성
- 중요한 점 : 컴포넌트를 서로 연결해두면
            당연히 context 사용 가능
컴포넌트는 파일당 1개만 만드는게 아님
*/

const UserContext = createContext();

function Componenet1(){

  const [user, setUser] = useState("test");

  return (
    <UserContext.Provider value={user}>
      <h1>{`Compo1 : 무슨 내용을 던지나 ${user}`}</h1>
      <Componenet2 />
      <Componenet3 />
    </UserContext.Provider>
  );
}

function Componenet2(){
  const user = useContext(UserContext);

  return (
    <h1>{`Compo2 : 무슨 내용을 던지나 ${user}`}</h1>
    
  );
}


function Componenet3(){
  const user = useContext(UserContext);
  return (
    <h1>{`Compo3 : 무슨 내용을 던지나 ${user}`}</h1>
  );
}


export default Componenet1;