function route( handler, pathname, response, req){
  console.log("경로명 : " + pathname);
  if(typeof handler[pathname] === 'function'){
    console.log("요청받은 handler : " + handler + " pathname : " + pathname);
    
    return handler[pathname](response, req);
  }else{
    console.log("요청받은 핸들러가 없음. handler : " + handler + " pathname : " + pathname);
    response.writeHead(404, {"Content-type" : "text/plain"});
    return "404 not found";
    // return response;
  }

}

exports.route = route;