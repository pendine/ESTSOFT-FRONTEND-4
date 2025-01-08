const btn = document.querySelector(".btn");

const indexBtn = document.querySelector(".indexBtn");

const result = document.querySelector(".result");

// console.log(indexBtn.value);     // /api/index
// console.log(indexBtn.getValue);  // undefined
// console.log(indexBtn.getvalue);  // undefined
// console.log(indexBtn.getAttribute(value)); //corsTest.js:10 Uncaught ReferenceError: value is not defined

btn.addEventListener("click", (e)=>{
  e.preventDefault();
  console.log("클릭 확인");
  
  let test = fetch("http://127.0.0.1:8080/api/index");
  console.log( test );
  let jsondata = test.then( res => {
          res.json().then( answer => {
              console.log( answer.index);
            }) //크아아아아아!!! 무슨 중첩이냐 JS!!!!!
    // console.log( res.index );
    // console.log("res : " + res);
    //                       console.log("res.index : " + res.index );
                          return res;
                      })
                      .catch( (error) => {
                        // return new Error("응답오류")
                        console.log("error 발생 : " + error.message );
                       });
  // console.log("jsondata : " + jsondata);
  // console.log("jsondata : " + jsondata.index);
  // console.log();


});

indexBtn.addEventListener("click" , (e)=>{
  e.preventDefault();
  console.log("버튼의 value값으로 API 호출 테스트");
  let addUrl = indexBtn.value

  // 반환받은 res.json()이 Promise 객체기 때문에 .then() 필요
  let res = getData(`http://127.0.0.1:8080${indexBtn.value}`)
           .then( res => { 
            console.log( res );
            console.log("indexBtn.addEventListner getData then res : " + res ); 
            console.log(" : " + res.index ); 
            return res;
           })
           .catch( (error) => {
            // return new Error("응답오류")
            console.log("error 발생 : " + error.message );
           });

  console.log("res : " + res);
        
  
  // console.log(res.json());
 
})


async function getData( url = "" ){
  try{
    let response = await fetch( url );
    if(!response.ok){
      throw new Error("응답코드 오류 : " + response.status);
    }
    return await response.json(); // Promise 객체를 반환함
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