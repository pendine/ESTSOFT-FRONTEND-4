import { createContext, useContext, useEffect, useState } from "react";

// 인증관련 데이터를 저장할 context를 생성
export const AuthContext = createContext(null);

export const AuthProvider = ({children}) =>{

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // 토큰이 있는지 확인
    const token = localStorage.getItem('token');
    // 토큰이 있다면 로그인 처리
    if( token ){
      setIsLoggedIn(true);
    }
  },[])

  const login = (username,password) =>{
    // 실제로는 서버의 인증 필요
    // 서버구현이 되지 않아 형식적으로만 처리
    // 로그인 기준 :
    // username : test
    // password : 1234
    console.log('username :', username , 'password : ' , password);
    if(username ==='test' && password ==='1234'){
      localStorage.setItem('token', 'testToken');
      setIsLoggedIn(true);
      return true;
    }
    return false;
  }

  const logout = () =>{
    localStorage.removeItem('token');
    setIsLoggedIn(false);
  }

  return(
    <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

// 커스텀 훅은 만들고 나면 처리를 위해
// 일부 설정이 필요함

// AuthContext의 사용을 간편하게 어디에서나 처리
// useContext를 통해 AuthContext에서 제공하는 값들을 가져옴
// 커스텀 훅의 이름을 useAuth로 지정
// 그 후 다른 컴포넌트에서 쉽게 인증관련 기능을
// 사용 할 수 있도록 처리
export const useAuth = () => useContext(AuthContext);
//  이렇게 한 이유
//  재사용성 향상과 문법자체를 간결히 사용 가능
