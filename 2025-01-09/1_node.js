/*
node js => server side javascript

LTS(Long Term Support)
 -> 호환성이 오래 유지됌 (3년정도 지원)

node와 NPM

-- 프로세스 찾기
C:\Users\PC>netstat -ano | findstr "3000"
  TCP    0.0.0.0:3000           0.0.0.0:0              LISTENING       57676
  TCP    [::]:3000              [::]:0                 LISTENING       57676

-- 프로세스 kill
C:\Users\PC>taskkill -f -pid 57676
성공: 프로세스(PID 57676)가 종료되었습니다.
*/

// 서버 만들기
let http = require('http');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-type' : 'text/html'});
  res.end(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
    </head>
    <body>
      <h1> 서버 실행 </h1>
    </body>
    </html>
            `);
}).listen(3000);