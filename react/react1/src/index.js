import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import reportWebVitals from './reportWebVitals';

// jsx를 적용하지 않은 예시
// const el = React.createElement('h1', {}, 'jsx 사용?');

// jsx를 적용한 예시
// const el = <h1>jsx 사용??</h1>;

// jsx의 표현식
const test = "테스트 문자열";
const el2 = <h1>리액트의 신기한 기능 {10 + 10}개 보여줄게요 {test}</h1>

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // el
  el2
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
