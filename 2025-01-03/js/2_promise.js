// 프로미스 사용하기
// 생성자로 객체 만들기
// promise 생성자 함수를 통해 비동기 작업을 수행할
// 콜백함수를 받아와야함
const promise = new Promise( (resolve, reject) => {
  // 작업성공시
  resolve('result');
// 작업 실패시
  reject('fail');
});

// promise는 비동기 처리가 성공하였는지 실패하였는지 등의 상태 정보를 가짐 
// -> 프로미스 함수가 전달 받는 콜백 함수는 내부에서 비동기 처리 작업 수행
  // => 성공 resolve | 실패 reject
/*
상태정보 4가지
1. pending : 비동기 처리가 아직 수행되지 않은상태
2. fulfilled : 성공 : 비동기 처리가 수행된 상태(resolve 함수 호출)
3. rejected : 실패 : 비동기 처리가 수행된 상태(reject 함수 호출)
4. settled : 비동기 처리가 수행된 상태 
            (resolve,reject 둘중 하나 호출, 끝나기만하면됨)
*/


// 비동기를 처리하는 함수 내부에 promis객체를 생성,
// 그 내부에 비동기 처리를 구현
// 예외 처리가 힘들었던 상황을 극복
// 특히 promise에서 가장 중요한 부분중 하나는 후속처리
const promiseAjax = (method, url, payload) => {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.setRequestHeader('Content-type', 'application/json');
    xhr.send(JSON.stringify(payload));

    xhr.onreadystatechange = function () {
      // 서버 응답 완료가 아니면 무시
      if (xhr.readyState !== XMLHttpRequest.DONE) return;

      if (xhr.status >= 200 && xhr.status < 400) {
        // resolve 메소드를 호출하면서 처리 결과를 전달
        resolve(xhr.response); // Success!
      } else {
        // reject 메소드를 호출하면서 에러 메시지를 전달
        reject(new Error(xhr.status)); // Failed...
      }
    };
  });
};

// 프로미스의 후속처리
//  => 프로미스 객체를 리턴 받던지 
const promise2 = new Promise((resolve, reject) =>{
  // 작업성공시
  resolve('result');

  reject('실패');
})

// 후속처리
promise2
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(()=>{ //try catch문의 finally와 동일
    console.log("작업완료");
  })
  // 프로미스를 통한 요청은 성공 or 실패 둘중하나.


  // 프로미스 예시
  // 무조건 프로미스화 하는게 아니라
  // 필요에 따라 사용
  // 1. 데이터 송수신
  // 2. 에러에 대한 처리 필요할때

  // 프로미스 객체가 무언가 주체가 돼서 하는게 아니라 
  // 함수가 동작을 할때 예외 처리 가능하게 만드는거같다

  // 프로미스 객체가 주체가되서 뭔갈 하는게 아니라 기존 함수가 비동기로 동작하더라도
  // 예외처리를 원활하게 만드는것. => 원활하지 않으면 콜백헬 구조
  // 아 이게 그냥 보는거하고 이해하는거하고 달라 진짜
function loadfile(url){
  return new Promise((resolve, reject) =>{
    
    const xhr = new XMLHttpRequest();
    xhr.open('GET' , url);
    xhr.onload = function(){
      console.log(xhr.responseText);
      if(xhr.status === 200){
          
          // 전송 성공시
          // 서버에서 응답받은 데이터는 
          // data 프로퍼티가 아니라
          // responseText에 담김.
          resolve(xhr.responseText);
      }
      else{ // 전송 성공 이외
        // console.log('이미지 호출 오류')
        reject( new Error('이미지 호출에러') );
      }
    }
    
    xhr.onerror = function(){ // 에초에 연결오류
      new Error('이미지 호출에러');
    }
    
    xhr.send();
  })
}


// loadfile('loadTest.json')
loadfile('https://jsonplaceholder.typicode.com/posts/1')
  .then((data) =>
  console.log('데이터로딩 성공'))
  .catch( (error) => {
    console.log('데이터 로딩 실패');
  })
  .finally(()=>{
    console.log('데이터 로딩 종료');
  });
  
/*
프로미스가 콜백보다 나은점
콜백은 1:1개념
 -> 프로미스는 .then을 이용하여 새로운 콜백을 쉽게 생성할 수 있음.
 -> 구조자체는 기존 JS 패턴과 달라서 이질적이지만
 적응만 한다면 (흐름만 익힌다면)결과에 따라 어떻게 진행하느냐의
 컨트롤이 매우 쉽다는 장점이 있음
 */