import { createContext } from "react";

export const context = createContext({
  isLogin: false,
  theme: true, //true === light, false === dark
  userName: "",
});

export const themeChange = () => {
  context.theme = !context.theme;
};

export const getTheme = () => {
  return context.theme ? "light" : "dark";
};
