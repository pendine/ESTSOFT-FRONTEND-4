/*
세션의 동작순서
1. 클라이언트의 요청(해당 페이지 접근, 파일 불러오기, 저장등)
2. 서버에서는 접근 클라이언트의 쿠기 확인. 클라이언트가 세션 ID를 보냈는지 확인
    -> 올바른 세션 ID라고 했으나 해당 세션의 ID만 존재 유무만 확인
3. 세션 ID가 없다면 서버는 세션ID를 생성하여 클라이언트에게 전송
4. 클라이언트는 재접속시 해당 쿠키를 이용하여 세션 ID값을 서버에 전달


session 미들웨어
 세션 구현 및 특정 사용자를 위한 데이터를
 임시로 저장해둘때 유용한 방법


1. 세션에 접근하는 방법
2. 세션 스토어

*/

// 세션에 접근하는 방법
/*
const cookieParser = require('cookie-parser');
const express = require('express');
const app = express();
const session = require('express-session') // 세션관리용 미들웨어
const fileStore = require('session-file-store')(session) //세션 파일 스토어

app.use(cookieParser(process.env.COOKIE_SECRET)); //쿠키값으로 비밀키를 받았다고 가정

app.use(session({

// 세션 관련 속성
  secure : true // https 환경에서만 session 정보를 주고 받도록 처리
  , secret : process.env.COOKIE_SECRET // 암호화 시 사용할 키 지정
  , resave : false // 세션을 언제나 저장할지 말지 설정
  , saveUninitialized : true // 세션에 저장할 내역이 없더라도 처음부터 세션을 생성할지 설정
  , cookie : { // 세션 관련 쿠키 설정 (세션관리시 클라이언트에 보내는 쿠키)
      httpOnly : true // 바닐라JS를 통한 세션 쿠키는 사용 불가능
      , secure : true
  }
  , name : 'session-cookie' // 기본값은 connect.sid
}))

app.get('/' , (req,res, next) =>{
  req.session.id = "hello";
})
*/

// express 의 세션은 클라이언트에 세션쿠키를 전송
//  -> 안전하게 쿠키를 전송하려면 서명을 추가해주는것이 좋음


// 세션 스토어
const express = require('express');
const app = express();
const session = require('express-session') // 세션관리용 미들웨어
const fileStore = require('session-file-store')(session) //세션 파일 스토어

const port = process.env.port || 3000;
// 세션은 미들웨어에 대한 설정을 먼저 진행하는것이 일반적
// 파일스토어는 사용하기전 설치 필요
// npm install --save session-file-store
// 저장할 고유한 저장소에대한 지정을 따로할 수 있음.
//  ex) mariaDB, Redis, MongoDB, 
//   https://www.npmjs.com/package/express-session#compatible-session-stores

app.use(session({
  secret : process.env.SESSION_SECRET || 'sesseionSecret' 
  , resave : false
  , saveUninitialized : false 
  // resave, saveUninitialized 둘 다 false로 처리한 이유는 우리가 원할때 세션을 생성하기 위해
  , cookie : {
    httpOnly: true
    , secure : process.env.NODE_ENV === 'production'
    , maxAge : 1000 * 60 * 60
  }
  , store : new fileStore({
    path: './sessions'
    , ttl : 3600 // 데이터, 세션의 만료시간을 제어하는 속성
                 // 단위 : 초
    , retries : 2
  })
}))

// 세션 존재여부 확인 및 카운터 증가
app.get('/', (req,res) => {
  req.session.num = (req.session.num || 0) + 1;
  console.log("session count : " , req.session.num );
  res.send(` 세션 방문 횟수 : ${req.session.num}`);
})

// 세션 초기화
app.get('/reset', (req,res) => {
  // destroy = 세션 삭제. 로그아웃 처리시 유용
  // 에러 처리를 추가하는것이 잘못된 요청이나
  // 여러가지 에러사항들을 처리할때 용이
  req.session.destroy((err) =>{
    //try catch로 처리하는것이 정석이나 간단 시현을 위해
    if(err){
      console.error("세션 초기화 실패 : " ,err);
      return res.statusCode(500).send('세션초기화 실패');
    }
    res.send('세션 초기화 완료');
  })
})

app.listen(port, ()=>{
  console.log("서버 실행");
})