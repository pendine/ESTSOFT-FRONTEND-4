/*
express 에서는 
js파일 중, 이름이 같은 파일이 존재할 수 있음.

이름이 같은 파일들은 폴더별로는 구분이 됨

클라이언트단 (view단) / 라우터 (서버 단)

최근 라우팅은
index를 하나 만들어두고
나머지는 업무별로 분배한다 생각하기 <- 동작? 컨트롤러?
*/
const express = require('express');
const router = express.Router();

// /user/admin으로 들어가면 실행됨
router.get('/user/admin', (req,res) => {
    console.log('Hello, admin!');
}); 

// /user/foo로 들어가면 이쪽이 실행됨. 위에서 아래 순서로 코드가 실행되니까.
router.get('/user/:id', (req, res) => {
    console.log(req.params, req.query);
});

// /user/foo로 들어가도 실행되지 않음
router.get('/user/foo', (req,res) => {
  console.log('Hello, foo!');
}); // => 따라서, router.get('/user/:id', (req, res) => { 보다 위에 위치해야함.


// http 메소드를 사용 가능
router.post('/user/foo', (req,res) => {
  console.log('Hello, foo!');
});


// 라우터의 주소가 같은경우가 존재
//  메서드명은 다를 수 가 있음.
//  왜 굳이 그렇게 할까?
//  get은 페이지 방문, 검색을 위해 사용
//  post는 새로운 내용 만들기, 수정, 삭제등에 사용
// url을 낭비하지 않도록 메서드명만 다르게 처리하는 경우가 있음.
//       -> 아하.. 동일한 url이지만 메소드만 다르게 하는거?
 
// route라는 메서드를 활용하여 그룹화 처리 가능
router.route('/test')
            .get((req,res) => {
              res.send('GET /test');
            })
            .post((req,res) =>{
              res.send('post /test');
            })

/*
req.app: req 객체를 통한 app 객체로의 접근이다. 예를 들어 req.app.get('port')와 같은 식으로 사용할 수 있다.
req.body: body-parser 미들웨어가 만드는 요청의 본문을 해석한 객체이다.
req.cookies: cookie-parser 미들웨어가 만드는 요청의 쿠키를 해석한 객체이다.
req.ip: 요청의 ip 주소를 담는다.
req.params: 라우트 매개변수에 대한 정보가 담긴다.
req.query: 쿼리스트링의 정보가 담긴다.
req.signedCookies: 서명된 쿠키들은 req.cookies 대신 여기에 담긴다.
req.get(헤더 이름): 헤더의 값을 가져온다.
res 객체도 알아보자.

res.app: 똑같이 res 객체를 통해 app 객체에 접근한다.
res.cookie(키, 값, 옵션): 쿠키를 응답에 설정하는 메서드이다.
res.clearCookie(키, 값, 옵션): 쿠키를 응답에서 제거하는 메서드이다.
res.end(): 데이터 없이 응답을 보낸다.
res.json(JSON): JSON 형식의 응답을 보낸다.
res.redirect(주소): 리다이렉트할 주소와 함께 응답을 보낸다.
res.render(뷰, 데이터): 템플릿 엔진을 렌더링하여 응답할 때 사용하는 메서드이다.
res.send(데이터): 데이터와 함께 응답을 보낸다. 데이터는 문자열, HTML, 버퍼, 객체, 배열 등이 될 수 있다.
res.sendFile(경로): 경로에 위치한 파일을 응답한다.
res.set(헤더, 값): 응답의 헤더를 설정한다.
res.status(코드): 응답 시의 HTTP 상태 코드를 지정한다.
*/