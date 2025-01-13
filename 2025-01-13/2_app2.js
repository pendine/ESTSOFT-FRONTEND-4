const morgan = require('morgan'); // express.logger 대체
const bodyParser = require('body-parser'); // express.bodyParser 대체
const methodOverride = require('method-override'); // express.methodOverride 대체

let requirePath = process.cwd();

console.log( 'requirePath : ' + requirePath);

const express = require('express'),
    routes = require( requirePath + '/2_routes/2_index'),
    todo = require( requirePath + '/2_routes/2_todo'),
    http = require('http'),
    path = require('path');

let app = express(); // express를 사용하기 위한 앱 생성
let port = 3000; // 포트번호 설정
// -> json파일등을 통해 지정해두고 해당 정보를 불러오는것을 권장.
// -> 서버관련설정들은 코드에 직접 적는거보다는 따로 만들어서 관리하는것이 일반적


app.set('port', port); // 포트번호 설정완료
app.set('views', __dirname + '/2_views')// html(템플릿 / 템플릿 경로 설정)
app.set('view engine', 'ejs') // 템플릿엔진 설정

// 미들웨어설정을 따로 담아와야함.(모듈을 가져와야함.)
app.use(morgan('dev')); // 요청 로깅 미들웨어
app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json()); // json으로 넘어올 바디영역 파싱.
app.use(methodOverride()); // http 메서드를 오버라이딩
//app.use(app.router);// 라우팅.

// 정적 리소스 처리 설정(html, css, js + 각종 미디어 파일들)
app.use(require('stylus').middleware(__dirname + '/public'));
app.use(express.static(path.join(__dirname, 'public')));

// get : 검색 및 페이지 방문
// post : 개인정보 전송 및 큰 데이터 저장시 사용
// 라우팅
app.get('/', routes.index);
// todo 리스트 페이지 접근
app.get('/list', todo.list);
app.post('/add', todo.add);
app.post('/complete', todo.complete);
app.post('/del', todo.del);

//서버실행
// get 메서드는 set한 정보를 가져오는것 또한 가능.
http.createServer(app).listen(app.get('port'), function(){
  console.log(`${app.get(port)} 번의 서버가 시작됐습니다.`);
})