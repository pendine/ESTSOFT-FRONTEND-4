/*
ajax를 구현하는 xmlhttprequest 객체


*/
// js에서는 객체를 사용할때
// 객체 자체를 변수에 담아서 활용하면 편함
const btn = document.querySelector("#btn");


// btn.addEventListener('click', function(){
  // let result = document.querySelector(".result");
  // // 요청처리
  // let xhr = new XMLHttpRequest();
  // xhr.open('get', 'https://jsonplaceholder.typicode.com/users');
  // xhr.setRequestHeader('content-type' , 'application/json');
  // xhr.send();
  // 
  // // 응답처리
  // // ajax의 결과를 받아올때는
  // // onload 콜백함수 구현이 필수
  // xhr.onload = function(){
  //   if(xhr.status == 200){ //응답코드 200
  //     alert('test');
  //     result.innerHTML = xhr.responseText;
  //     console.log(xhr.responseText);
  //   }
  // }
// })

/*
객체의 상태파악과 정보 넘겨보기
*/
// btn.addEventListener('click' , function(){
//   let xhr = new XMLHttpRequest();
//   let crs = '';
// // 디버깅
//   xhr.onreadystatechange = function(){
//     switch(xhr.readyState){ //readyState = 객체의 상태값
//       case xhr.UNSENT :  // == unset : 호출전 
//       // 객체 생성전의 플래그이므로 
//       // 이미 생성되어있으므로 동작하지 않음
//         console.log("unset");
//         break;
//       case xhr.OPENED :
//         console.log("opened");
//         break;
//       case xhr.HEADERS_RECEIVED :
//         console.log("headerReceived");
//         break;
//       case xhr.LOADING :
//         console.log("loading");
//         break;
//       case xhr.DONE : 
//         console.log("done");
//         break;
//     }
//     document.querySelector("#ajaxtest").innerHTML +=crs;
//   }
//   xhr.open('get', 'https://jsonplaceholder.typicode.com/users');
//   xhr.setRequestHeader('content-type' , 'application/json');
//   xhr.send();
// })

btn.addEventListener('click', function(){
  let result = document.querySelector(".result");
  let xhr = new XMLHttpRequest();
  // xhr.open('get', 'https://jsonplaceholder.typicode.com/users');
  xhr.open('get', '1-1_data.json');
  
  // Content-type : 
  // 요청 바디에 담아 전송할 데이터의 타입
  // Accept : 
  // 서버가 응답(sendback)할 데이터의 MIME-type설정
  // 헤더에 저장
  xhr.setRequestHeader('content-type' , 'application/json');
  xhr.send();
  
  // 응답처리
  // ajax의 결과를 받아올때는
  // onload 콜백함수 구현이 필수
  xhr.onload = function(){
    if(xhr.status == 200){
      result.innerHTML = xhr.responseText;
      console.log(xhr.responseText);
    }
  }
  
})
