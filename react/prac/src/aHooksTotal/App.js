import { useContext, useState } from "react";
import { Outlet, Link } from "react-router-dom";
import { context, themeChange, getTheme } from "./context.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Login.js";
import Wellcome from "./Wellcome.js";
import Home from "./Home.js";
import Hell from "./Hell.js";

function App() {
  const [nowTab, setNowTab] = useState("home");
  const { themeChange, isLogin, userName } = useContext(context);

  return (
    <div className="container">
      <header className="header">
        <h1>여기 헤더 영역</h1>
        <div>
          {isLogin ? (
            <Link to="/login" onClick={setNowTab("Login")}>
              로그인
            </Link>
          ) : (
            <pre>안녕하세요 {userName}님</pre>
          )}

          <button onClick={themeChange}>테마 변경</button>
        </div>
      </header>
      <navigator>
        <ul>
          <Link
            to="/home"
            onClick={(e) => setNowTab("home")}
            style={{ fontWeight: nowTab === "home" ? "bolder" : "normal" }}
          >
            <li>Home</li>
          </Link>
          <Link
            to="/wellcome"
            onClick={(e) => setNowTab("wellcome")}
            style={{ fontWeight: nowTab === "wellcome" ? "bolder" : "normal" }}
          >
            <li>Wellcome</li>
          </Link>
          <Link
            to="/hell"
            onClick={(e) => setNowTab("hell")}
            style={{ fontWeight: nowTab === "hell" ? "bolder" : "normal" }}
          >
            <li>to the hell</li>
          </Link>
        </ul>
      </navigator>
      <section>
        {nowTab === "login" ? <Login /> : ""}
        {nowTab === "wellcome" ? <Wellcome /> : ""}
        {nowTab === "home" ? <Home /> : ""}
        {nowTab === "hell" ? <Hell /> : ""}
      </section>
    </div>
  );
}

export default App;
