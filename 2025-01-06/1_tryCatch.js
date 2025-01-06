// trycatch(예외처리)
// 과거에는 콜백의 고질적 약점때문에 쓰는것이 무의미 했음.
// 프로미스와 async의 등장으로 최근에는 다시 쓸수 있게되었음.

// try/catch의 장점(catch와 비교)
// 1. 내가 원하는 영역만 제어할수 있음.
// 2. 커스텀 에러 처리를 통해 다양한 코드 구현이 가능.
//  -> 프로토타입, 클래스 개념을 명확히 알아야 함,

// try catch 기본 동작 방식
// try 영역은 정상적으로 실행될때 처리되는 코드영역
// catch는 try영역이 실행되는 도중 에러를 만났을때 처리되는 영역
// try {
//     // 코드1~ 코드10 어쩌구저쩌구
//     // 비동기 데이터 로딩중 
//     gunchimssak;

// } catch (error) {

//     console.log("이거 무적권 실행됨");
//     // try영역에서 에러 발생이 감지되면
//     // 이 영역이 발동.
//     // 코드가 정상실행된다면 catch는 발동x
//     // 기본적으로는 콜백에서의 에러는 못잡지만
//     // async나 프로미스 내부에서는 잘 동작함.

//     // name, message 프로퍼티는 에러 명과 에러 내용을 담고 있음
//     // console.log(error.name);
//     // console.log(error.message);
//     // console.log(error.stack);

// }

// throw 연산자
// 에러처리 통합
// 이론상 어떤것이든 에러객체로 사용이 가능함.


//let newErr = new Error("?????????????");

// console.log(newErr.name);
// console.log(newErr.message);

try{
  // let user =  JSON.parse("{일부러 틀릴거임 끌끌}")

  let json = '{"key" : "문자열"}'

  /*
  단순히 JSON 생성시 문법 에러는 catch문에서
  if문과 instanceof를 이용해서 확인가능하지만
  
  RefferenceError
  아래의 참조 에러는 원하는 키로 값을 찾을 수 없는
  참조 에러 이기 때문에 throw로 직접 만들어서 던져야함
  */ 
  let user = JSON.parse(json);

  if(!user.name){
  //   // 어떤 에러가 발생할 지 모르기 때문에
  //   // 코드를 작성한 후 테스트를 많이 하여
  //   // 검출된 에러에 대한 처리를 추가하는 형식으로 진행
      throw new ReferenceError("불완전한 데이터 입니다 양식을 다시 확인해주세요");
  //     // 자바스크립트에서는 throw를 사용하여 해당 에러를 던짐.
  }
  

  console.log(user.name);

}catch(e){
  //console.log(e.name);
  // console.log("error : " + e.message);
  // console.log("error : " + e);
  // console.log("error : " + e.stack);

  // 여러개의 에러를 처리하는 방법
  //  => instanceof 사용
  //   객체의 타입을 찾는 키워드 typeof와 비슷함
  
  if(e instanceof SyntaxError){
    console.log("문법 오류. ");
  }
  else if(e instanceof ReferenceError){
    console.log("참조 오류. 변수가 없음");
  }
  else if(e instanceof Error){
    console.log("Undifinded error message : " + e.message );
  }
}
finally{
  console.log('작업 종료');
}

/* 
finally
무조건 실행되는 부분 :: 자바와 동일.
연산속도 측정시에도 사용하기도함
 */ 

/*
커스텀 에러 만들기
 -> 에러메시지를 직접 만들어서 개발 및 관리를 용이하게 만드는 중요한 부분

에러 직접 만들기
클래스, 상속, 생성자, super 메서드, this

*/


// class Error { 
//   constructor(message){
//     this.message = message;
//     this.name ="Error";
//     this.stack = <call stack>;
//   }
// }

class testError extends Error{
  constructor(message){
    super(message);
    this.name='testError';
  }
}

function test1(){
  throw new testError("inserted test Error message");
}

try{
  test1();
}
catch(error){
  console.log(error.message);
  console.log(error.name);
}