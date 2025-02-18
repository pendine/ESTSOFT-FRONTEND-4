function getUser(id){

  if(id >100 || id < 1){
    throw new Error("아이디 값은 1~100 까지만");    
  }

  return {
    id,
    email:`user${id}@test.com`,
  }
}
// 위의 함수는 컴포넌트가 아닌 모듈함수라고 선언
module.exports = {getUser};