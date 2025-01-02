let btn1 = document.querySelector('.time');
let btn2 = document.querySelector('.stop');

let h1 = document.querySelector('.now');
let clr;

/*

setInterval 함수 사용 주의사항
setInterval 함수들은 고유한 id값이 존재함
그래서 btn 이벤트가 실행되고 난 후에는 해당 고유 id 값은 소멸

대처법 : 전역변수 선언 후 setInterval 함수를 전역변수에
할당해뒀다가 정지시 해당 전역변수를 재호출(clear에 전달)

setTimeout은 변수 할당 불가능
*/

btn1.addEventListener('click', function(){
  // 이벤트가 겹치지 않도록(여러개의 타이머가 생성하지 않도록)
  // interval사용시 다음의 코드 추가
  if(clr){
    clearInterval(clr);
  }
  
  document.querySelector('.now').innerHTML = new Date();
  clr = setInterval( () => {
    document.querySelector('.now').innerHTML = new Date();
      // = new Date().getMinutes() + " : " + new Date.getTimes() + " : " + new Date().getSeconds();
  } , 1000);

})


btn2.addEventListener('click', function(){
  clearInterval(clr);
})