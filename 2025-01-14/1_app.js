const express = require('express');
const path = require('path');
// const morgan = require('morgan');
// const bodyParser = require('body-parser');
const indexRoutes = require( './1_route/index');
const todoRoutes = require( './1_route/todo');
const http = require('http');

// 1. 서버는 요청을 받으면 처리를 함
// 2. 서버는 요청받은 데이터를 라우터를 통해서 어디서 처리해야할지 구분함
// 3. 구분한 데이터를 [db , static 폴더의 내용과 view단과 연계한 내용]하여 클라이언트에 전송

let app = express(); // express를 사용하기 위한 앱 생성
let port = process.env.PORT || 3000; // 포트번호 설정

// 환경 설정
// const isProduction = process.env.NODE_ENV === 'production'; // 여기에 어떤 설정값을 넣는지에 따라
                                                            // 개발환경인지 운영환경인지 갈
// 이 코드를 통해 개발/운영환경에 대한 분기설정이 가능

// 기본 설정 일부를 미리 지정
app.use(express.json()); // Json 요청이 오면 그 본문을 파싱
app.use(express.urlencoded({extended:true})); // url 인코딩 데이터 파싱을 설정

// view 엔진 설정
app.set('views', path.join(__dirname, './1_views')); // 2_views 폴덜르 바라보도록 설정
app.set('view engine', 'ejs'); // 사용하는 템플릿 엔진이 ejs이기 때문에 맞춰줌

// 프록시 관련 내용 설정도 가능
app.set('trust proxy' , true) //프록시 신뢰 설정

// 뷰 엔진 설정후 정적파일 서비스 도 추가하여
// 뷰 엔진에 css와 js를 잘 적용 시킬 수 있도록 처리
//   -> 여기서 js는 클라이언트단의 js
app.use(express.static(path.join(__dirname, '1_static'))); // static 파일 경로 설정
// 경로설정에 path.join() 메서드를 사용하는 이유
//  사용하면 편함
//  os별로 인식하는 경로가 다를수있는데 이부분을 잡아줌

// 라우터 설정 (2가지 방법이 있음)
app.use('/' , indexRoutes) // 인덱스 라우터로 처리 위임
// app.use('/todo', todoRoutes) // 이쪽 라우터를 타면 /todo로 시작
//  ex) list를 처리하는 코드가 있다면 그리고 주소를 /list 로 설정했다면
// 사용자는 요청을 /todo/list 로 접근해야함

// 라우터를 나누는이유
// 1. 라우팅 로직의 모듈화
// 2. 코드 가독성
// 3. 응집도 결합도 이슈
// 4. 관심사 분리의 원칙 적옹
//     -> 처리영역은 업무별 분리하는것이 제일 좋음

// 지금 프로젝트는 주소 자체를 간단히 처리하고 싶기 때문에
// 직접 라우팅 설정을 하는 방법으로 진행
app.get('/list' , (req,res) => todoRoutes.list(req,res));
// list는 다이렉트로 요청이 아닌 메인 접근시 같이 불러오도록 설정
app.post('/add' , (req,res) => todoRoutes.add(req,res));
app.post('/complete' , (req,res) => todoRoutes.complete(req,res));
app.post('/del' , (req,res) => todoRoutes.del(req,res));

// 404처리
// 만들지 않은 url 요청을 수신했을때 처리
//  -> 에러메시지는 사용자에게 가급적 노출을 방지할것
//    응용할경우 404 에러시 출력할 화면을 지정 가능

// 서버 시작
const server = app.listen(port, ()=>{
  // 콜백함수
  // 서버가 실행되며 같이 실행될 콜백함수 설정
  console.log(`
    🚀 서버 실행 정보 
    - 포트: ${port}
    - 환경: ${process.env.NODE_ENV || 'development'}
    - 주소: http://localhost:${port}
  `);
})

server.timeout = 5000; // 5초간 서버 응답이 없는 경우 타임아웃 처리
module.exports = app; //다른 모듈에서 앱을 사용할 수 있도록 처리