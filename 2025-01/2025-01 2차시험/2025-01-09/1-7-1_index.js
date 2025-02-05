let server = require('./1-7_fileServer');
let router = require('./1-7-2_router');   // reouter 를 server로 의존성 주의
let requestHandler = require('./1-7-3_requestHandler'); //요청 url에 따라

let handler = {};
handler["/"] = requestHandler.start;
handler["/start"] = requestHandler.start;
handler["/upload"] = requestHandler.upload;



server.start( router , handler);

