import logo from './logo.svg';
import './App.css';

/*
컴포넌트 정의하고
변수를 사용하여 선언적으로 UI에 렌더링
UI를 렌더링하는 파트에서 HTML과 Javascript를 조합하여 UI를 작성

코드에서 변수들의 값은 동적으로 사용됨

*/
function App() {

  const test = 'test';
  const test2 = 'test2test2';

  return (
    <div>
      <h1> hello {test} </h1>
      <h1> {test} : {test2}</h1>
    </div>
  );
}

export default App;
