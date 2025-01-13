/*
express
 node기반의 경량 프레임워크
express 가 있다면 프로젝트 관리를 더 쉽고 빠르고 편하게 할수 있음.

express의 미들웨어
사전상 미들웨어의 의미
 운영체제와 기계 사이를 중계역할하는 소프트웨어(중간에서 매개역할)
 요청과 응답 중간에 위치해 있는 소프트웨어(코드)
  (요청과 응답을 제어하는 코드)

템플릿 엔진
html자체는 정적(주어진 기능만 사용할수 있음,)
 -> html은 직접 기능을 추가하기위해 js의 존재가 필수.
 -> 자바스크립트를 사용하여 html을 랜더링할수 있도록 처리.
 -> pug, Handlebars
 -> 우리는 ejs를 사용할거. html의 양식을 거의 그대로 사용할수 있음.
 -> 개념상으로는 동적인 랜더링을 위해 사용.
    (데이터의 결과를 쉽게 화면에 랜더링 하기위해 쓴다해도 과언은 아님.)

 
 모듈들을 사용할때 변수에 담아두는 이유는
 express.모듈명 의 형식으로 사용해야함 (코드 가독성 및 편의)

주요 미들웨어 모듈 
(https://expressjs.com/id/resources/middleware/body-parser.html)
1. body-parser : http 요청 body 파싱
 - express.bodyParser
2. compression : http 요청 압축
 - express.compress
3. connect-rid : 고유한 요청 id 생성
4. cookie-parser : 쿠키 헤더 파싱, req.cookies 에 할당
 - 쿠키에 정보를 추가할때 사용
5. cookie-session : 쿠키 기반의 세션 생성시 사용
6. cors : 다양한 옵션들을 이용하여 CORS 활성화
 - cors : 서버가 다른 출처로부터의 엑세스를 허용하거나 제한할수 있게하는
          http 헤더 기반의 메커니즘
7. csurf : CSRF 취약점 방어
8. errorhandler : 에러 디버깅 및 수정시 사용
9. method-override : 헤더를 이용하여 HTTP method 변경시 사용
10. morgan : 요청 로그 남기기
11. multer : multi-part formdata 처리
12. serve-index : 주어진 경로의 디렉토리 리스트 제공
13. serve-static : 정적 파일 제공
13. session : 서버 기반의 세션 생성 (세션을 제어하여 로그인 시간제한)
14. timeout : http 요청 처리를 위한 timeout 생성 (요청이 일정시간 지연되면 연결 종료)
15. vhost : 가상 도메인 생성

라우터, 라우팅

라우팅
서로 다른 ip 네트워크간 패킷을 전달하는 프로세스
(최적의 경로를 선택하는 프로세스)
 -> express에서는 ip가 다르지 않기 때문에 패킷 전달용으로 활용

라우터
라우팅 중계 장비

express에서는 app.js같은 파일에서
app.get 같은 HTTP method와 연관되어 있는 부분들이
라우터라 생각하면됨.

*/