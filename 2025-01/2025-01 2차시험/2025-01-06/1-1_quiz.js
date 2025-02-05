/*
QuizError 예외 생성
발생조건
배열내부에 홀수 확인시
숫자 이외의 자료형 확인시
*/
const test = [2,4,6,8];
const test2 = [2,4,5,6];
const test3 = [2,4,6,'f'];


// try
// class quizError extends Error{
//   constructor( array ){
//     let message;
//     array.forEach(element => {
//       if(element != typeof Number){
//         message +="not a number Element Founded ";
        
//       }
//       else if(element % 2 != 0){
//         message +="odd number Element Founded ";
//       }
//     });
//     this.name='quizError';
//   }
// }
// function testError( test ){
//   throw new quizError(test);
// }

// console.log( testError(test));
// console.log( testError(test2));
// console.log( testError(test3));
// c:\Users\PC\Desktop\EST FRONTEND 4\2025-01-06\1-1_quiz.js:26
//     this.name='quizError';
//     ^
// ReferenceError: Must call super constructor in derived class before accessing
//  'this' or returning from derived constructor
// ----------------------------------
// answer
class quizErrorA extends Error{
  constructor( message ){
    super( "Exception : " + message);
    this.name='quizError';
    this.level = 'debug::';
  }

  log(){
    return this.level+this.name+ "/"+this.message;
  }
}

// 예외처리를 사용하기 좋은 경우
// 1. 데이터 처리
//  -> 얘기치못한 상황이 발생
//  -> 외부 접근이라 다른 서버의 상황으로 인해
//  -> 외부에서 데이터 받아올때 예외처리 해야함
//  -> 반대로 우리가 보낼때도...
function quizAnswer( arr ){
  try{
    arr.forEach((item,index)=> {
      if(typeof item !== "number"){
        throw new quizErrorA(`not a number arr[${index}] : ${arr[index]}`);
      }
      else if( item % 2 !== 0){
        throw new quizErrorA(`odd number arr[${index}] : ${arr[index]}`);
        // message +="odd number Element Founded ";
      }
    });

    console.log( "배열 : "+ arr +" / 커스텀 예외 없음");
  }
  catch(error){
    if(error instanceof quizErrorA){
      console.log(error.level + error.message);
      console.log(error.log());
    }
  }
}

quizAnswer(test);
quizAnswer(test2);
quizAnswer(test3);
