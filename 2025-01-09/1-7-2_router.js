/*
서버에서 정보를 받아오는건 확인했지만 라우터 동작하지 않았음
 - 라우터가 사용되지 않았음

라우터
 - 어떤 코드를 실행할지 결정하는 영역

  */

function route( handler, pathname, response, postData ){
  console.log("경로명 : " + pathname);
  if(typeof handler[pathname] === 'function'){
    console.log("요청받은 handler : " + handler + " pathname : " + pathname);
    
    return handler[pathname](response, postData);
  }else{
    console.log("요청받은 핸들러가 없음. handler : " + handler + " pathname : " + pathname);
    response.writeHead(404, {"Content-type" : "text/plain"});
    // return "404";
    return response;
  }

}

exports.route = route;