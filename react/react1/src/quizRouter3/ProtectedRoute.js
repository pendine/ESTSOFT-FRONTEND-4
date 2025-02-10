import { Navigate } from "react-router-dom";
import {useAuth} from './AuthContext.js';

// 로그인상태가 아닐경우에는 
// 무조건 로그인페이지로
// 리다이렉트 하기위해 준비된 코드

function ProtectedRoute({children}){
  const {isLoggedIn} = useAuth(); // useAuth = 커스텀 훅

  if(!isLoggedIn){
    return <Navigate to='/login' replace />
  }
  return children;
}

export default ProtectedRoute;