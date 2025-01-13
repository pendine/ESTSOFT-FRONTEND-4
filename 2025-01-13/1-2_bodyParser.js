/*
body-parser
본문에 있는 데이터를 해석하여 req.body객체로 만들어주는 미들웨어
  -> 폼데이터, ajax요청의 데이터 처리시 사용
     (사용자가 입력한 데이터 처리)


express 에서는 내장된 바디파서를 이용해서 간단히 추출

*/

const express = require('express');
const path = require('path');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');

app.use(express.json() );
app.use(express.urlencoded({extended:true}));
//  -> 클라이언트에서 데이터를 보냈을때 파싱해서 body에 넣어줌

// 사용자가 보낸 데이터를 받아서
// 아래의 라우터 코드를 통해서 알맞은 url로 전달함

app.post('test' ,(req,res) =>{
  req.body.name; // 사용자가 전송한 내용을 받아올 수 있음
                 
})