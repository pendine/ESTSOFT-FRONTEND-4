const btn = document.querySelector(".btn");
const indexBtn = document.querySelector(".indexBtn");
const result = document.querySelector(".result");
 
const API_URL = 'http://127.0.0.1:8080';

// 깨달음 
//  비동기 함수를 사용하고 promise객체를 받지않으려면 전제조건이
//    1. 비동기 처리 함수를 사용한 곳에서 async / await를 사용하거나
//    2. async / await를 사용하지 않으면 then을 사용해야한다

btn.addEventListener("click", async (e)=>{
  e.preventDefault();
  
  let test = fetch( `${API_URL}/api/index`);
  console.log( test );
  let jsondata = await test.then( res => { return res.json() })
                     .then( res => {
                      console.log( " btn : res : " + res.index);
                      return res.index
                     } )
                     .catch(error => {return error.message} );

                     
  let addEl = document.createElement('p');
  addEl.textContent = "결과 : " + jsondata;

  result.appendChild(addEl);
});

indexBtn.addEventListener("click" , async (e)=>{  // 함수에 async 추가
  e.preventDefault();
  console.log("버튼의 value값으로 API 호출 테스트");

  let res = await getData( API_URL + e.target.value );  // await 추가
  
  console.log("indexBtn : " ,res);

  let addEl = document.createElement('p');
  addEl.textContent = "결과 : " + res;
  result.appendChild(addEl);
})


async function getData( url = "" ){
  try{
    let response = await fetch( url );

    if(!response.ok){
      throw new Error("응답코드 오류 : " + response.status);
    }

    let res = await response.json()
                      .then( res => {
                        console.log(res);
                        console.log(res.index);
                        return res.index;
                      });
                      
    console.log("res : " + res);
    console.log(res);
    return res;
  } catch ( error ){
    console.error("fetch로 잡을수있는 error는 네트워크 오류뿐");
    throw error;
  }
}



//  // https://developer.mozilla.org/ko/docs/Web/API/Fetch_API/Using_Fetch
//  // POST 메서드 구현 예제
// async function postData(url = "", data = {}) {
//   // 옵션 기본 값은 *로 강조
//   const response = await fetch(url, {
//     method: "POST", // *GET, POST, PUT, DELETE 등
//     mode: "cors", // no-cors, *cors, same-origin
//     cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
//     credentials: "same-origin", // include, *same-origin, omit
//     headers: {
//       "Content-Type": "application/json",
//       // 'Content-Type': 'application/x-www-form-urlencoded',
//     },
//     redirect: "follow", // manual, *follow, error
//     referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
//     body: JSON.stringify(data), // body의 데이터 유형은 반드시 "Content-Type" 헤더와 일치해야 함
//   });
//   return response.json(); // JSON 응답을 네이티브 JavaScript 객체로 파싱
// }

// postData("https://example.com/answer", { answer: 42 }).then((data) => {
//   console.log(data); // JSON 데이터가 `data.json()` 호출에 의해 파싱됨
// });