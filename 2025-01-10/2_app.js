const express = require('express');
const path = require('path');


// 요청 처리와 포트 설정등을 처리
const app = express();

// 서버의 포트번호 3000번을 정의
app.set('port' , process.env.PORT || 3000);

app.get('/', (request,response) =>{
  
  response.send("test");

  //html 파일 전송 예정
  response.sendFile(path.join(__dirname, '/index.html'));
});

app.listen(app.get('port' , () => {
  console.log(app.get(port) , ' test what the fuck');
}))