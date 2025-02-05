// const http = require('http');

// createServer : http 서버객체 생성
//   요청 이벤트가 발생하면 req를 처리하며 res 반환하는
//   request Listener 메서드를 호출하는 구조
// http.createServer((req, res) =>{
//   console.log("server start");

//   res.statusCode = 200;
//   res.setHeader('Content-Type' , 'text/plain');
//   res.end("message");


// }).listen(3000);

// console.log("server start outside");

/*
-------------------------------------------------------------------
웹페이지를 만들기
파일을 업로드 받아 업로드할 이미지파일을 선택해서 폼으로 전송하면
해당 이미지를 어딘가로 업로드
 node 장점중 하나가 첨부파일 관리가 다른언어 대비 쉬운편

필요한 것 들
  1. 웹페이지 제공 (http 서버 필요)
  2. 요청과 요청을 처리할 핸들러들을 연결짓기 위한 무언가 필요 (라우터)
  3. 서버로 도착한 요청, 그리고 라우터를 이용해서 실질적 요청 핸들러 구현

서버가 node.js라면 비동기 로 처리되는 경우
 -> 동기처리 지양

사용자가 
*/

// let http = require('http');

// let server = http.createServer();
// server.listen(3000);
// 만들고 열기만 함
// ---------------------------------------
// let http = require('http');
// function onReq(req, response){

//   response.writeHead(200, {'Content-type' : 'text/plain'});
//   response.write("write 뭔가를 씀");
//   response.end(); 
// }

// http.createServer(onReq).listen(3000);
// console.log("start");

/*
서버의 모듈화
다른 페이지를 
*/

let url = require('url');

let http = require('http');
let route = require('./1-7-2_router');

function start( route , handle ){

  function onReq(req, response){
    console.log(route.pathname);

    // post method로 받은 데이터 저장용
    let postData = "";

    // url 모듈과 쿼리스트링 모듈을 사용하여
    // req 객체의 정보 획득    
    const myURL = new URL(req.url , `http://${req.headers.host}`);
    console.log("myURL : " + myURL);
    let pathName = myURL.pathname;
    console.log("myURL.pathName : " + pathName );

    console.log("router : " + route.route( handle, pathName, response, postData));
    
    // console.log("req.url : " , req.url); // req.url :  /test
    // console.log("req.headers : " , req.headers); // req 헤더 정보 JSON 내용 출력
                                                  // req.headers :  {
                                                  //   host: 'localhost:3000',
                                                  //   connection: 'keep-alive',
                                                  //   'cache-control': 'max-age=0',
                                                  //   ~
    // console.log("req.headers.host : " , req.headers.host);  //req.headers.host :  localhost:3000
    console.log("요청 확인 : " , pathName );

    //비동기 전송방식 구현을 위해 POST 방식으로 내용을 전송하고 받으려면
    // 특정 이벤트마다 콜백을 호출하는 방식으로 구현해야함
    // data(POST 데이터 도착), end(모든 내용을 다 받았음)
    // 
    req.setEncoding("utf8");

    req.addListener("data", function(chunk) {
      // chunk = 받아온 데이터 
      postData += chunk;
      console.log("전송받은 POST data chunk : " + chunk);
      // called when a new chunk of data was received
    });
    
    req.addListener("end", function() {
      // called when all chunks of data have been received
      route.route(handle, pathName, response, postData);
    });


    // response.writeHead(200, {'Content-type' : 'text/plain'});
    // let content = route(handle, pathname); // 라우터를 이용해서 url에 맞는 페이지를 
    // if(content === undefined){
    //   console.error("없는 페이지 요청")
    //   return;
    // }
    // response.write( content ); // 전송해줌
    // response.end(); 
  }

  http.createServer(onReq).listen(3000);
  console.log("start");
}

exports.start = start;