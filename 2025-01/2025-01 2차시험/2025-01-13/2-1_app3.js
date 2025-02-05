// 라우트 설명용
const express = require('express');
const app = express();

// ? 얘는 폴더명인데
const indexRouter = require('./2_index');
// ? 얘는 파일명이고
const userRouter = require('./2_index/user');

const userRouter = require('./2_index/find');

app.set('port' , process.env.PORT || 3000);

// ?어째서 폴더명으로 가져온 놈을 쓸수가 있는거지?
// Node.js는 해당 폴더 안의 index.js를 로드
// require('./폴더명')은 오직 폴더 안의 index.js 파일만 가져옴
// 다른 파일의 내용을 사용하려면 index.js에서 명시적으로 require해야 합니다.

// require('폴더명')의 안에 index.js 없다면
// package.json이 있는지 확인하고
// package.json의 main 속성의 값으로 지정된 파일 로드
// main 속성이 없다면 에러 발생

// 라우터 별 위임 분리
app.use('/', indexRouter); // 각기 다른 경로에 미들웨어 등록
app.use('/user', userRouter); //각기 다른 경로에 미들웨어 등록
app.use('/find', findRouter);

app.use( (req, res, next) =>{
  req.statusCode(404).send('Not Found');
});


app.listen(app.get('port') , ()=> {
  console.log( `포트번호 : ${app.get('port')} 서버 실행`);
});