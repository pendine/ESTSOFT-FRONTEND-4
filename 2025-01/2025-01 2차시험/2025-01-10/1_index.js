let server = require('./1_fileServer');
let router = require('./1_router');   // reouter 를 server로 의존성 주의
let requestHandler = require('./1_requestHandler'); //요청 url에 따라

let handler = {};
handler["/"] = requestHandler.start;
handler["/start"] = requestHandler.start;
handler["/upload"] = requestHandler.upload;
handler["/show"] = requestHandler.show;

server.start( router , handler);

