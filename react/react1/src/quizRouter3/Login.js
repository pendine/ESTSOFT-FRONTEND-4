import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {useAuth} from './AuthContext.js';

function Login() {
  const [username, setUserName] = useState("");
  const [pass, setPass] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate(); // 프로그래매틱 라우팅을 위한 훅

  const {login} = useAuth;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (Login(username, pass)) {
      navigate("admin");
    } else {
      setError("로그인 실패");
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ padding: "20px" }}>
      <div>
        <input
          type="text"
          placeholder="UserName"
          value={username}
          onChange={(e) => setUserName(e.target.value)}
        />
      </div>
      <div>
        <input
          type="password"
          placeholder="UserName"
          value={pass}
          onChange={(e) => setPass(e.target.value)}
        />
      </div>
      {error&&<h1 style={{color:'red'}}>{{error}}</h1>}
      <button type="submit">login</button>
    </form>
  );
}

export default Login;
