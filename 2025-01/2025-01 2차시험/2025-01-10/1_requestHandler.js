
let query = require('querystring');
let fs = require('fs');

let formidable = require('formidable');

function start( response, postData){
  console.log("start 함수 실행");
  var body = '<html>'+
  '<head>'+
  '<meta http-equiv="Content-Type" '+
  'content="text/html; charset=UTF-8" />'+
  '</head>'+
  '<body>'+
  '<form action="/upload" enctype="multipart/form-data" '+
  'method="post">'+
  '<input type="file" name="upload">'+
  '<input type="submit" value="Upload file" />'+
  '</form>'+
  '</body>'+
  '</html>';

  response.writeHead(200,{"Content-type" : "text/html"});
  response.write(body);
  response.end();
}

function upload( response, req){
  let form = new formidable.IncomingForm();
  console.log("전송확인");
  form.parse(req , function(error, field, files){
    console.log("전송완료");

    // 파일이름은 uuid를 이용하여 저장필요
    // 파일별로 저장도 해야하고, 필요하다면
    // 섬네일용 이미지로 저해상도 이미지를 별도로 생성해서 저장도 해야하고
    // 파일 실제 이름를 받고, 서버에 저장시 중복 방지를 위해서 고유 아이디를
    // uuid로 지정해서 줘야함
    fs.renameSync(files,upload.path , "uploadfiles/test.png");
    response.writeHead(200,{"Content-type" : "text/html"});
    response.write("received image : <br />");
    response.wirte("<img src='/show' />");
    response.end();
  })
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