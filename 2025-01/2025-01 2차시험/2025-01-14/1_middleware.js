const express = require('express');
const app = express();


// 해당프로젝트( 앱, 어플리케이션 ) 관련 설정 속성등을 만듬
app.set('port', process.env.PORT || 3001);

/* 공통 미들웨어 생성 */
app.use((err, req, res, next) => {
  req.requestTime = Date.now();

  try{
    req.test= 'test';
  }catch(error){
    res.status(500).send(err, message);
    next();  
  }

  // 무조건 실행됨.
  console.log(" 공통 미들 웨어 실행 ");
  // next : 다음 미들웨어로 넘어가는 함수
  //  - next가 없으면 다음 미들웨어 실행 불가
  //  express 내장 함수
  
  next();
})

app.get('/error' , (req, res) => {
  next();
  } , (req,res) =>{
    try{
      
    }catch(error){
      error(error);
    }
  }
)

// 요청과 매칭되는 확인
app.get('/test' ,(req, res) => {
  // res.send("테스트 URL 접근 확인");
  console.log( " request Time : " + req.requestTime );
  res.send( req.requestTime );
})

// 정규 표현식을 사용한 내용도 적용가능
app.get('/category/:name' , (req, res) => {
  res.send(`카테고리 URL 확인 : ${req.params.name}`);
})


app.listen(3001);