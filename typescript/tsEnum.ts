/*
enum(열거형)
 ts에서 enum요즘은 자주 안씀.
  -> 전제 조건이 있음
1. 해당환경이 tree shaking을 지원하는지를 체크
-> 가지치기
tree shaking : 실제로 쓰지 않는 코드들을 제외하는 개념
  -> 웹 성능 최적화와 관련이 있음.

2. 작성한 코드가 사용되지 않을수도 있다라는 전제조건이 있는경우.

enum은 ts관점으로 성능장 불리함
다만 코드 생산성을 높일 수 '는' 있음
개발자의 입장에서는 성능과 생산성의 밸런스가 중요함.

enum : 상수들이 모이면 enum
 - 상수들이 모여서 enum이라는 하나의 집합을 구성
*/

// export enum num1{
//   one = 1,
//   two = 2,
//   three = 3
// }

// console.log( num1.one );
// console.log( num1.two );
// console.log( num1.three );

export enum statusCode{
  NotFound = 404,
  Success = 200,
  Accepted = 202,
  ErrorCode = 500
}
console.log( statusCode );