import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useContext } from "react";
import { ContextProvider, Context } from "./Context.js"; // Context 제대로 import!

import Login from "./Login.js";
import Wellcome from "./Wellcome.js";
import Home from "./Home.js";
import Hell from "./Hell.js";

function App() {
  return (
    <ContextProvider>
      <Router>
        <Main />
      </Router>
    </ContextProvider>
  );
}

function Main() {
  const { isLogin, userName, logout, themeChange } = useContext(Context); // Context 사용 가능!

  return (
    <div className="container">
      <header className="header">
        <h1>여기 헤더 영역</h1>
        <div>
          {isLogin ? (
            <>
              <pre>안녕하세요, {userName}님</pre>
              <button onClick={logout}>로그아웃</button>
            </>
          ) : (
            <Link to="/login">로그인</Link>
          )}
          <button onClick={themeChange}>테마 변경</button>
        </div>
      </header>

      <nav>
        <ul>
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/wellcome">Wellcome</Link>
          </li>
          <li>
            <Link to="/hell">To the Hell</Link>
          </li>
        </ul>
      </nav>

      <section>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/wellcome" element={<Wellcome />} />
          <Route path="/hell" element={<Hell />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </section>
    </div>
  );
}

export default App;
