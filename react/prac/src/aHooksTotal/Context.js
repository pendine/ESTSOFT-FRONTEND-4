import { createContext, useState } from "react";

export const Context = createContext(); // 여기서 'Context'를 직접 export 추가!

export const ContextProvider = ({ children }) => {
  const [isLogin, setIsLogin] = useState(false);
  const [theme, setTheme] = useState(true); // true = light, false = dark
  const [userName, setUserName] = useState("");

  const themeChange = () => {
    setTheme((prev) => !prev);
  };

  const login = (id) => {
    setUserName(id);
    setIsLogin(true);
  };

  const logout = () => {
    setUserName("");
    setIsLogin(false);
  };

  return (
    <Context.Provider
      value={{
        isLogin,
        setIsLogin,
        theme,
        themeChange,
        userName,
        setUserName,
        login,
        logout,
      }}
    >
      {children}
    </Context.Provider>
  );
};
