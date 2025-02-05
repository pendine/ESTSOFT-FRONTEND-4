import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Car from './util.js'; //임포트는 항상 최상단에 작성 필요
import Test1 from './basic/classComponent.js'
import Class2 from './basic/classComponent.js'
import Props1 from './basic/propsExam.js'
import Event from './basic/Event.js'
import EventExam from './basic/EventExam.js'
import Condition from './basic/conditionalRender.js'
import Garage from './basic/reactList.js'
import UsingCss from './basic/usingCss.js'

// import reportWebVitals from './reportWebVitals';

// jsx를 적용하지 않은 예시
// const el = React.createElement('h1', {}, 'jsx 사용?');

// jsx를 적용한 예시
// const el = <h1>jsx 사용??</h1>;

// jsx의 표현식
// const test = "테스트 문자열";
// const el2 = <h1>리액트의 신기한 기능 {10 + 10}개 보여줄게요 {test}</h1>

// jsx문법을 적용시킬때 html태그가 2줄 이상이면
//  소괄호로 감싸는것을 권장
// const el3 =( 
// <div>
//   <h1>이렇게도 가능한가?</h1>
// </div>
// );

/*
위의 el3 변수에는 div라는 body를 제외한 최상위 부모요소를 통해
코드들을 하나로 묶었음. 하지만 부모요소가 body인 경우는 어떻게 처리하냐
- 그냥 써도 상관 없으나 성능상의 문제점이 발생함
(DOM에 불필요한 노드가 추가됨. 불필요한 노드가 뭐지? 
 => 컴포넌트를 만들때 모든 요소를 div같은 태그로 감싸는 경우가 많음
 위의 el3 변수처럼 div로 감싸는 경우가 불필요한 노드가 추가되는것이라고
 할 수 있음.)
el3 변수를 출력했을때의 구조
<div id="root">
  <div>
    <h1>이렇게도 가능한가?</h1>
  </div>
</div>

위의 문제점을 해결하기위해 fragment 라는것을 사용하여 여러줄을
한번에 묶을 수 있음.
*/

// const el4 = (
//   <>
//   <h1>안녕하세요!</h1>
//   <p>리액트 배우는 중</p>
//   </>
// );
/*
이렇게 하면 추가적인 <div> 없이 h1과 p가 직접 렌더링돼서
불필요한 노드가 생기지 않음

el4 변수를 출력했을때의 구조
<div id="root">
  <h1>안녕하세요!</h1>
  <p>리액트 배우는 중</p>
</div>
*/

/*
JSX 규칙1
JSX문법은 XML 의 규칙을 따름
XML : 마크업 언어 HTML과 유사
- 다른 종류의 데이터를 기술할때 사용하는 마크업 언어
규칙: 시작이 있으면 종료가 있음.

예시 : input 태그의 경우 종료 태그를 생략해도 문제가 없음
- xml의 경우 반드시 잘 작성해줘야함.

*/

// const el5 = <input type='text' />

/*
JSX 규칙2
class 관련
jsx기반의 형식에서는 class가 아니라 className으로 작성해줘야함
class 라고 작성해도 잘 작동하지만, JSX  문법 위반
const el6 = <h1 class="test">class test</h1>;

Javascript의 class와 css에서의 class라는 동일한 예약어가 있기 때문에
className으로 구별하는것이 권장됨
*/
// const el6 = <h1 className="test">class test</h1>;

/*
jsx 규칙3
퀴즈 : 단준 js로 변수로 test1을 선언하고
test1의 값에 따라 나타나는 문자열을 다르게 보여줄것
test1의 값이 10보다 작으면 hungry
test1의 값이 10보다 크면 : gunchimssak
*/
// let test1 = 8;
// let txt = (test1 > 10 ? 'hungry' : 'gunchimssak' ) ;
// const el7 = <h1>{txt}</h1>

// 컴포넌트를 클래스로 구성
// class Car extends React.Component{
//   render(){
//     return <h1>클래스 방식의 컴포넌트 리턴</h1>
//   }
// }
// 함수 기반 컴포넌트
// function Car(){
//   return <h1>함수 방식의 컴포넌트 리턴</h1>
// }

// props
// function Car(prop){
//   return <h1>프롭스 리턴 테스트 {prop.test}</h1>
// }
// 파라미터를 test로 주고, 
// 호출할때는 파라미터를 prop의 test로 호출해야함  


// 컴포넌트 활용 예시
// function Wide(){
//   return (
//     <>
//       <h1>컴포넌트 활용예시</h1>
//       <Car />
//     </>
//   )
// }
// 컴포넌트 안에 컴포넌트 포함 가능
// function Car(){
//   return <h1>프롭스 리턴 테스트 </h1>
// }


const arr1 = [1,2,3,4,5,6,7];
const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render( <Test1 result="기아"/>);
// root.render( 
  // <Props1 />
  // <Event />
  // <EventExam />
  // <Condition isGoal={false}/>
// );
root.render(
  // <Condition test={arr1}/>
  // <Garage />
  <UsingCss />
);
// root.render(
  // el3
  // el4
  // el5
  // el6
  // el7
  // <Car />
  // <Car test="테스트"/>
  // <Wide />
  // <Test1 />
// );

// root.render(
//   // el
//   // el2
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
