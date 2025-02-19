var test = (function (param1, param2){
  function cal(a, b){
      return a+b;
  }
  cal(param1, param2);
})

test(10, 20);

// 위의 코드는 과거 함수가 충돌하는것을 방지하기위한
// 옛날의 자바스크립트 코드 형태.
//  -> IIFE방식의 모듈

// Commonjs : node의 기본 내장 라이브러리
//  -> JS 모듈을 구현하는 대표적인 명세.

// AMD : 비동기 로딩 환경에서 모듈구현
// UMD : AMD까지 통합한 형태의 라이브러리.

// -> 최근에는 babel + webpack을 이용하여 모듈시스템을 구성하는것이 일반적