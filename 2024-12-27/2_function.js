/*
함수
어떤 작업을 수행하기 위해 필요한 문법의 집합
자주사용하는 코드들을 모아둔 영역

왜쓰는가
 - 개발효율의 유리함
 - 재사용성 증대
 - 확장성 유리

과제 : 응집도와 결합도의 차이를 조사한 후
      자바스크립트에서 응집도와 결합도가 높거나 낮은 예시작성
1월 6일까지


응집도 (Cohesion)
  모듈(클래스, 함수 등)의 내부 요소들이 얼마나 밀접하게 관련되어 있는지를 나타내는 지표입니다.
  높을수록 좋습니다.
  높은 응집도: 모듈 내의 구성 요소가 단일한 책임(Single Responsibility Principle)을 수행하며, 서로 잘 연결되어 있음.
  낮은 응집도: 모듈 내의 구성 요소들이 다양한 역할을 수행하거나 서로 관련이 없음.
결합도 (Coupling)
  구현된 코드 상호 의존성이 얼마나 강한지를 나타내는 지표입니다.
  낮을수록 좋습니다.
  높은 결합도: 다른 모듈에 강하게 의존하며, 변경 시 영향을 받기 쉽습니다.
  낮은 결합도: 모듈 간의 의존성이 약하며, 독립적으로 동작 가능.

좋은코드는
응집도가 높고 결합도가 낮아야합니다.
예)
응집도가 높은 코드 예

class Profile{
  function profileEdit( profile ){
  // 사용자의 프로필 변경 로직
  }
}
Class Password{
  function userPasswordChange( password ){
  // 사용자의 비밀번호 변경 로직
  }
}
Class Credit{
  function userCredit( profit ){
  // 사용자의 크레딧 변경
  }
}
=> 응집도가 높음. 사용자라는 객체의 정보를 각 클래스들이 역할을 맡아 처리함

응집도가 낮은 코드의 예시
class User{
  function profileEdit( profile ){
  // 사용자의 프로필 변경 로직
  }

  function passwordChange( password ){
  // 사용자의 비밀번호 변경 로직
  }

  function credit( profit ){
  // 사용자의 크레딧 변경
  }
}
=> 응집도가 낮음. 사용자라는 클래스안의 각 메소드들이 서로 연관이 없음

결합도가 높은 코드 예

Class A{
  function a(){
  // A라는 동작을함
  }
  function b(){
  // B라는 동작을함
  }
}

Class B{
  function aA( a ){
  // 클래스 A의 a메소드의 결과를 받아 처리함
  }
  function bB( b ){
  // 클래스 A의 b메소드의 결과를 받아 처리함
  }
}

Class C{
  function aAC( a ){
  // 클래스 B의 a메소드의 결과를 받아 처리함
  }
  function bBC( b ){
  // 클래스 B의 b메소드의 결과를 받아 처리함
  }
}



함수의 예시
  함수는 구현부와 호출부로 나뉨

구현부
 - 함수를 구현하는 부분

호출부
 - 함수를 호출하는 부분

함수는 호출되지않으면 실행되지 않음
함수에 이름이 있으면 기명함수.
없으면 익명함수 (arrow function)

함수 관련 개념들
1. 지역변수(local variable) / local scope
  - 잘 활용해야 성능, 확장성에 유리
  - 필요할때 쓴다
2. 전역변수(global variable) / global scope


함수 쉽게 만들기
1. 함수에 집착하지말자
   코드를 짜다보니 중복 - 함수로 만들기
   이건 자주 쓸것같다 - 함수로 만들기
   이벤트 처음 호출할땐 어쩔 수 없이 addEventListener
2. 함수 생성시 테스트 용도로 선언해둔 변수는 파라미터화
3. 함수에서는 리터럴값은 자제

함수의 특징
1. 일급 객체 : 다른객체들에 일반적으로 적용가능한 연산을 모두 지원하는 객체
   - 변수에 담을 수 있음(JS 특징) 파라미터로 전달 가능, 함수의 리턴값으로 사용 가능
   - 다른언어와 함수의 동작 구조가 다름 (특별한 동작을 하는 구조)
  - 1. 기본구조
  function a(){}
  - 2. 변수에 함수를 할당
  let test = function a(){}
  test();
  let test2 = test;
  test2();
  

2 콜백 : (함수 내부의 함수로 쓸때도 있고 다양함)
 - 자세한건 콜백 파트에서
 콜백 함수 구조
 function test4(param){ test2(); }
 test4(test());
  콜백의 핵심은 바로 호출이 아닌 
  상황에 맞춰서 나중에 호출한다 -> 함수의 실행 순서를 조절


3. 함수 명명 규칙
 - show~ : 무언가를 보여주는 함수
 - get~ : 값을 가져오는 함수
 - create~ : 무언가를 만드는 함수
 - check~ (chk~): 무언가를 확인 후 T/F 리턴
 - calc~ : 무언가를 계산하는 함수

*/

// 두개의 값을 인수로 집어넣으면 최소값을 출력하는 min함수
function min( param1, param2){
  if(param1 < param2) return param1;
  else if (param1 < param2) return param2;
}

//a의 b 제곱의 결과 출력하는 pow함수
function pow( a, b){
  return Math.abs( Math.pow(a,b));
}
