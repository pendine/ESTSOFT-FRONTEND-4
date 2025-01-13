/*
static
정적인 파일들
 -> html, css, javascript, media files
css, js등의 파일들을 잘 인식할 수 있는 반드시 필요한 미들웨어

정적인 파일들을 나누는 이유
 : CBD 개발 방식이 유행해도 front/back 을 구분
   관심사의 분리, 유지보수성의 향상
*/

// 아래의 경우는 기본 경로로 왔을때  express가 public 폴더안에 있는
// 해당경로의 파일을 찾아감
//  <-- 경로로 왔을때 pulibc 폴더 안에있는 해당 경로의 파일을 찾는다
//  => static 폴더의 위치를 public 이라는 이름의 폴더로 인식
//  public 보다는 views 라는 이름이 많이 사용됨
// app.use('/' , expressstatic(path.join(__dirname, 'public'));

// views/css/style.css 파일이 있다고 가정
// 요청상으로는 localhost:port/css/style.css
// 응답으로 views/css/style.css 파일을 리턴
//   요청경로와 응답경로가 다른이유 
//     -> 보안상 서버의 구조를 외부인이 쉽게파악하기 어렵도록
//  static이 없다면 fs.readfile을 사용해서 읽도록 처리 해야함.

// 실전활용 예시
//  로그인한 유저는 페이지를 볼 수 있고 아니면 안보여주는 예시
app.use(morgan('dev'));
app.use(cookieParser(process.env.COOKIE_SECRET));
app.use(session({
    resave: false, 
    saveUninitialized: false, 
    secret: process.env.COOKIE_SECRET, 
    cookie: { 
        httpOnly: true, 
        secure: false,
    },
    name: 'session-cookie',
}));
// 일부러 아래 둔다.
app.use('/', (req, res, next) => {
	// 미들웨어 안에다 둔다.
    if (req.session.id) // 세션 아이디가 있다면 (로그인 상태라면)
		express.static(path.join(__dirname, 'public'))(req, res, next); // public에서 에셋을 보여준다
	else // 세션 아이디가 없다면
    	next(); // 다음 미들웨어 실행
});
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
