/* 사용자가 자주 발생시키는 이벤트
또는 자주 사용되는 유용한 이벤트

마우스
click, dblclick(좌클릭)
contextmunu(요소 위 마우스 우클릭)
mouseover, mouseout
hover, mousemove

키보드
keyup - 키보드의 배열을 땔데
keydown - 키보드의 배열 누를때
keypress - 키를 누르고 뗏을때

문서, 폼, css 이벤트
DOMCeontentLoaded - DOM 생성 완료 후 실행할 이벤트
 모든 html 요소 로딩 완료

submit - 폼 요소 제출
focus - 포커스 상태

*/

const btn = document.querySelector(".btn");
btn.addEventListener( 'click', function(){
  alert('알림');
})

const test = document.querySelector(".test");
test.addEventListener('keypress',function(){
  console.log("keypress");
});

// 요즘 잘 안쓰는 방식
const btn3 = document.querySelector(".btn3");
btn3.onclick = function(){
  alert("이벤트핸들러 프로퍼티");
}


const namelimit = 6
const usrName = document.querySelector(".userName");
const des = document.querySelector(".description");
usrName.addEventListener("blur", function() {
  if(usrName.value.length<namelimit){
    des.innerHTML= `이름은 ${namelimit}글자 이상`;
  }
  else{
    des.innerHTML = '';
  }
});