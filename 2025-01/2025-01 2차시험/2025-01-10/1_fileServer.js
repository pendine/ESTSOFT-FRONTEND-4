let url = require('url');

let http = require('http');
let route = require('./1_router');

function start( route , handle ){

  function onReq(req, response){
    console.log(route.pathname);

    let postData = "";

    const myURL = new URL(req.url , `http://${req.headers.host}`);
    console.log("myURL : " + myURL);
    let pathName = myURL.pathname;
    route.route(handle, pathName, response, req);

  }

  http.createServer(onReq).listen(3000);
  console.log("start");
}

exports.start = start;