//  예) 로그인 코드 구현
//  node.js는 개발자가 일일히 처리해줘야하는 불편함이 있음

// document.cookie를 통해 바닐라JS 도 쿠키 정보 핸들링 가능

// Express에서는 쿠키를 '읽기'나 ,'쓰기'를
//  cookie-parser 미들웨어를 통해 접근 할 수 있음.

const express = require('express');
const path = require('path');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');

const app = express();
const secret_key = 'secretKey';

app.use(cookieParser(secret_key));

app.set('port', process.env.PORT || 3000);

app.use(morgan('dev'));
app.use(cookieParser()); 
// get요청이 오면 uri변수들이 파싱되어 req.cookies객체에 저장된다.
// 쿠키에 쓰기 준비 완료

app.get('/', (req,res) =>{

  const test = req.cookies.name;

  const test2 = req.signedCookies.name;

  // 쿠키의 정보 읽기
  if(test){
    // console.log( req.cookies );
    // console.log( "받은 쿠키 있음"); 
    // 받은 쿠기가 있을때 쿠키 내용 변경은 설정에 따라 다름
    
    // 쿠키값을 서버가 받으면 문자로 받음
    console.log(test);
    console.log(req.signedCookies.count);
    
    // 쿠키 생성시 res.cookie 를 통해 생성
    // cookie(키, 값, 옵션 형태) 로 사용 가능
    //  encodeURIComponent()
    //   -> URI의 특정한 문자를 UTF-8로 
    //      인코딩해서 결과를 처리하는 메서드
    // 옵션
    // maxAge : 만료시간을 밀리초로 설정
    // expires : 만료 날짜를 GMT 시간으로 설정
    // path : 쿠키의 경로 : 기본값: '/'
    // domain : 도메인 이름 : 기본값
    // secure : https에서만 쿠키를 사용할 수 있도록 처리
    // httpOnly : 웹서버를 통해서만 쿠키에 접근 할 수 있도록 처리
    // signed : 쿠키에 다한 서명 지정 (실무에서는 대부분 켜둠)
    //    -> 내 서버가 직접 만든 키인지 아닌지 검증
    //       쿠키 클라이언트 위변조에 대응
    //       원리 : 비밀키를 통해 만들어낸 서명을 쿠키값 뒤에 사용
    //       서명이 완료된 쿠키는 req.signedCookies에 들어감
  }else{
    // 클라이언트 쿠키 세팅
    const name = {
      name : 'test1',
      pw : 'q1w2e3r4'
    };
    // const name = 'test1';  //secret_key를 이용하면서 주석처리
    // const pw = 'q1w2e3r4'; //secret_key를 이용하면서 주석처리
    res.cookie('name', encodeURIComponent(name),{
      // expires: new Date(), // 이 경우 쿠키가 즉시 만료
      maxAge : 1000 * 60 * 60 * 24, // 쿠키 유효시간 24시간
      httpOnly: true,
      path:'/',
      // test:'test'
      signed:true, // 서명 완료
      secure:process.env.NODE_ENV ==='prodution' //운영환경을 https로 동작
    })

// cookie:
    // ba.uuid=0; 
    // JSESSIONID=46791C221E19B0CF4FE410956FC845B7; 
    // pga4_session=acf4a906-5adb-4ae4-a5ef-a01c9c7a0c86!ByPLtpcldx9N6NVaAN1AvsA+CroGerhEP1faVw3sToo=; 
    // name=test1
    console.log( res.cookie ); 
    console.log( "쿠키 생성"); 
    let count = 0;
  }
  count = count + 1;
  res.cookie('count' , count, {signed:true})
  console.log( res.cookie ); // 크게 의미 없음
  res.send('cookie test');

  // 쿠기에 쓰기
})

app.listen( app.get('port') , ()=>{
  console.log( 'port' , '번 포트 실행');
})