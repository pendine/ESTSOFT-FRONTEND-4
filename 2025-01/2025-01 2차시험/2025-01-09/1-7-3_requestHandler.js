
let query = require('querystring');
let fs = require('fs');

// requestHandler는 컨트롤러의 역할을 해줌
// view와 controller 로직을 한곳에 같이 구현하는것과 같은것
// 아래의 예시는 미권장
function start( response, postData){
  console.log("start 함수 실행");
  let body = '<html>'+
  '<head>'+
  '<meta http-equiv="Content-Type" content="text/html; '+
  'charset=UTF-8" />'+
  '</head>'+
  '<body>'+
  '<form action="/upload" method="post">'+
  '<textarea name="text" rows="20" cols="60"></textarea>'+
  '<input type="submit" value="Submit text" />'+
  '</form>'+
  '</body>'+
  '</html>';

  // return 'start file';
  response.writeHead(200,{"Content-type" : "text/html"});
  response.write(body);
  response.end();
}

function upload( response, postData){
  console.log("upload 함수 실행 postData : " + postData);

  // return 'upload file';
  response.writeHead(200,{"Content-type" : "text/plain"});
  response.write("upload here : " + postData);
  response.end();
}

function show( response, postData){
  console.log("첨부파일 보기");
  fs.readFile("1.png" , "binary", function(error, file){
    if(error){
      console.log(error.message);
      response.writeHead(500, {"Content-Type": "text/plain"});
      response.write(error + "\n");
      response.end();
    }else{
      response.writeHead(200, {"Content-Type": "image/png"});
      response.write(file, "binary");
      response.end();
    }
  })
}

exports.start = start;
exports.upload = upload;
exports.show = show;