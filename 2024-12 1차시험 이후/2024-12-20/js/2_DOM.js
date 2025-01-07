// const el1 = document.getElementById('one');
// const el1 = document.querySelector('#one');
// console.dir(el1);
// el1.className = 'blue';

//querySelector로 여러개가 있는 요소를 선택할때
// const els = document.querySelector('li.red');
// console.log(els);
/*
다중선택
모든 red 클래스를 blue로 치환 하려는데 1개씩 건너띔
getElementsByClassName 사용
자바스크립트의 배열 특성
- 사실 자바스크립트 배열은 가짜(유사 배열)
- DOM의 원리와 가깝게 풀면
  className은 HTMLCollection 구조로 잡고
   - HTMLCollection은 실시간으로 구조를 잡아주는 특징
      -> 그래서 HTML 컬렉션으로 가져온 구조가 실시간으로 적용되기 때문에
         중간에 건너뛰게됨.
  querySelectorAll 은 NodeList 구조로 잡아주는 차이점이 있음
   - 기존에 잡힌 구조에서 크게 변경하지 않음
*/ 
// const els2 = document.getElementsByClassName('red');
//  => HTML colection

const els2 = document.querySelectorAll('.red');
//  => NodeList
console.log(els2);

for(let i=0; i<els2.length; i++){
  // console.log(els2[i]);
  els2[i].className='blue';
  // console.log(els2[i]);
}
