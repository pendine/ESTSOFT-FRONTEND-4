import { useContext, useState } from "react";
import { Context } from "./Context.js";

const Login = () => {
  const [userID, setUserID] = useState("");
  const [pass, setPass] = useState("");
  const { isLogin, login } = useContext(Context);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (userID === "test" && pass === "test") {
      login(userID); // 로그인 처리
    } else {
      alert("아이디 또는 비밀번호가 틀렸습니다!");
    }
  };

  return (
    <>
      {isLogin ? (
        <h2>이미 로그인했습니다!</h2>
      ) : (
        <form onSubmit={handleSubmit}>
          <label htmlFor="userId">
            ID:
            <input
              id="userId"
              type="text"
              onChange={(e) => setUserID(e.target.value)}
              placeholder="User ID"
            />
          </label>
          <label htmlFor="password">
            비밀번호:
            <input
              type="password"
              onChange={(e) => setPass(e.target.value)}
              placeholder="User Password"
            />
          </label>
          <button type="submit">로그인</button>
        </form>
      )}
    </>
  );
};

export default Login;
