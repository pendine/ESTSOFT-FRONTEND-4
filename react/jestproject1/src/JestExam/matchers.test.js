import user from './test1.js'
const {getUser} = require('./test1.js');
// test('유저객체 호출결과' , ()=>{
//   expect(getUser(1)).toEqual({
//     id:1,
//     // email:`user1@test.com`,
//     email:`user1@test.com`,
//   });
// })


// test('숫자0 문자0 구분' , () => {
//   expect(0).toBeFalsy(); // 숫자 0 : false의 의미도 있음
//   // expect(0).toBeTruthy(); // 숫자 0 : false의 의미도 있음
//   expect("0").toBeTruthy(); // 문자 0 : false? X
//   // expect("0").toBeFalsy(); // 문자 0 : false? X
// })

// function drinkAll(callback, flavour) {
//   if (flavour !== 'octopus') {
//     callback(flavour);
//   }
// }

// // 테스트 그룹화의 의미는 실행했을때 
// // 잘될까 안될까를 기본적으로 구분할때 사용
// describe('drinkAll', () => {

//   // 테스트 코드들은 간단한 규칙만 기억
//   // 테스트할 내용을 호출한다
//   //  - 호출 후 결과를 예상
//   //  - dbms 연결 문제 여부
//   test('drinks something lemon-flavoured', () => {
//     const drink = jest.fn();
//     drinkAll(drink, 'lemon');
    
//     expect(drink).toHaveBeenCalled(); // 함수 호출 O
//   });

//   test('does not drink something octopus-flavoured', () => {
//     const drink = jest.fn();
//     drinkAll(drink, 'octopus');
    
//     expect(drink).not.toHaveBeenCalled(); // 함수 호출 X
//   });
// });

// test('toHaveLength() / toContain() | array test 예시', ()=>{
//   const array = ['a','b','c','d'];
//   expect(array).toHaveLength(7);
//   expect(array).toContain('t');
//   expect(array).toContain('a');
// })


// test('Throw 테스트' ,()=>{
//   // 예외 발생 여부 확인
//   // expect(() => getUser(-1)).toThrow(); 
//   // 예외 발생시, 예외 메시지 확인
//   expect(() => getUser(-1)).toThrow("아이디 값은 1~100 까지만"); 

//   /*
//   예외처리 메시지는 Enum같은 공통된 값을 통해 관리하는 것이
//   프로젝트의 규모가 커져도 메시지의 일관성 부여.
//   예외 처리시 출력하는 메시지의 일관성 부여하여 퀄리티 보장 수 있음
//   */
// })


// 아래와 같이 jest에서 함수를 테스트할때는
// 모의 함수라는 것을 임시로 만들어서
// 테스트 하는 것을 권장
// - 아래와 같이 사용하는것을 mock함수라고 함
//   (주로 추적용 호출시 확인용도로 사용)
// const testFn = jest.fn();
//  - mock의 경우는 화살표함수가 강제되는 단점이 있어
//    좀더 복잡한 함수의 경우는 기존함수에 
//    spy를(jest.spyOn()) 붙여 감시하는 형태로 구현도 가능
// 1. spy는 객체의 메서드에만 사용 가능
// 함수를 사용하면 인식하지 못함
// 2. export 한 외부파일에서 함수를 import로 가져와서 사용함
//   ex) import * as testTarget from '경로'
//    const spy = jset.spyOn(testTarget , "함수명");

const testInstance= {
  callTest(test){
    return 'called';
  }
}

const testFn = jest.fn((a) =>{
  return 'Aa';
});
 
function callTest(test){
  return 'called';
}

test('함수 호출 테스트' , () =>{
  // 함수 호출 테스트 오류 : 실행도 안됨
  // 오류메시지 : Matcher error: received value must be a mock or spy function
  // callTest(1);
  // callTest(1);
  // callTest(1);
  // expect( callTest(1) ).toHaveBeenCalledTimes(3);
  
  // 함수 호출 테스트 성공
  // testFn('a');
  // testFn('b');
  // testFn('c');
  // expect( testFn ).toHaveBeenCalledTimes(3);

  // jest.spyOn(global, "callTest");
  // callTest('a');
  // callTest('a');
  // callTest('a');
  // expect( callTest ).toHaveBeenCalledTimes(3);

  const spy = jest.spyOn(testInstance, "callTest");
  testInstance.callTest('a');
  testInstance.callTest('a');
  testInstance.callTest('a');
  // expect( spy ).toHaveBeenCalledTimes(3);

  // expect(spy).toReturn();

  expect(spy).toReturnWith('called');
})