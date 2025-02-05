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

// const els2 = document.querySelectorAll('.red');
// //  => NodeList
// console.log(els2);

// for(let i=0; i<els2.length; i++){
//   // console.log(els2[i]);
//   els2[i].className='blue';
//   // console.log(els2[i]);
// }

/*
위와같은 문제를 회피하는 방법
 => HTMLCollection을 이용하여 순회할때 상태가 변경되어 중간 요소를 건너뛸때
1. 끝에서 시작으로 시도
2. while문 활용. <= ??? 원리는 모름

3. 타입을 바꾼후 forEach 로 변경
[...els2].forEach(els => els.className='blue');


Dom Traversing 
 정확한 요소를 선택하고
 거기에 맞는 프로퍼티 값을 지정하는 방식
(이것만 잘해도 기본적인 이벤트들은 거의다 다룰수 있음.)

let test = document.querySelector('#one');
test.innerHTML = 'sssssss';

document.body : body자체를 선택하는 방법
 - 주의사항 : js 로딩이 된후 사용해야 함
document.head : head자체를 선택하는 방법


탐색과 관련된 Dom Traversing
- parentNode
 - 부모노드 탐색
let el3= document.querySelector('#one');
console.log(el3.parentNode);


- firstChild, lastChild (사용 비권장)

let els3 = document.querySelector('ul');
console.log(els3.firstChild);
console.log(els3.lastChild);
els3.firstChild.className = 'blue';
els3.lastChild.className = 'blue';
 위 예시는 예상대로 동작하지않음
  - 이유 : 브라우저들의 특성(브라우저 엔진의 특성)
   대부분의 브라우저들은 요소사의 공백 또는 줄바꿈 문자를 텍스트 노드로 취급

- firstElementChile, lastElementChild (사용 권장)

let els3 = document.querySelector('ul');
els3.firstElementChild.className = 'blue';
els3.lastElementChild.className = 'blue';
console.log(els3.firstElementChild);
console.log(els3.lastElementChild);
 위 예시는 예상대로 동작함.
 - 자식요소 선택
 
hasChildNodes()
 해당 요소가 자식노드의 노드를 갖고있는지 true, false로 반환
childNodes
  NodeList로 반환. 텍스트노드 포함(컨텐츠 영역도 포함)
  textNode를 포함한 모든 동등노드를 탐색.
children
  HTMLCollection으로 반환(요소들만 반환)
  자식노드 컬렉션 리턴. (textNode는 포함되지 않음.)

let els3 = document.querySelector('ul');
if(els3.hasChildNodes()){
  console.log(els3.childNodes); 
  // NodeList로 반환. 텍스트노드 포함(컨텐츠 영역도 포함)
  console.log(els3.children);  
  // HTMLCollection으로 반환(요소들만 반환)
}

동등노드 탐색
previousSibling, nextSibling (비권장)
previousElementSibling, nextElementSibling (권장)

    let el4 = document.querySelector('#two');

    console.log(el4.previousElementSibling); // #one 요소 출력
    console.log(el4.nextElementSibling); // #three 요소 출력

    console.log(el4.previousSibling); // #text
    console.log(el4.nextSibling); // #text

속성노드로의 접근법
1. 텍스트를 바꾸고 싶을때.

해당 노드의 정보를 가져오는법
1. 태그 자체 선택
2. 노드의 타입
  - 1 요소노드
  - 2 속성노드
  - 3 텍스트노드
let el4 = document.querySelector('#two');
console.log(el4.nodeType);
console.log(el4.nodeName);

console.log(el4.nodeValue);
el4.firstChild.nodeValue = 'testtest' 
// 노드 value값으로 값을 변경시키고 싶다면 
// firstChild or lastChild를 사용할것.
console.log(el4.nodeValue);


classList , className
className : class 속성의 값을 가져오거나 변경할때 사용
 -> 여러개의 클래스 값도 변경 가능
classList : className과 비슷한 속성
  - 읽기 전용 프로퍼티
  - 메서드로 접근하여 변경의 오류를 최소화하는 장점
  - 관련메서드로 add, remove, item, toggle, contains, replace 등
  1. add : 지정한 클래스 값을 추가할 때 사용
     - 이미 존재한다면 무시
  2. remove : 지정한 클래스 값을 제거할 때 사용
  3. item : 배열(혹은 유사배열)로 담겨진 요소들 중 인덱스를 이용하여
            클래스값을 가져올때 사용.
  4. toggle : 클래스값 토글링(on/off)
    - 클래스가 존재하면 지우고 false 리턴
    - 클래스가 없으면 추가하고 true 리턴

      -> 다음값이 있을때 true로 판단된다면 지정한 클래스값 추가
         아니면 false로 두고 제거
  5. contains : 간혹 사용
    -  지정한 클래스값이 존재하는지 확인하는 속성
  6. replace : 존재하는 클래스를 새로운 클래스로 교체
    - 잠깐 바꾸는경우 toggle을 사용할 것

속성
  1. hasAttribute
    - 지정한 어트리뷰트를 갖고있는지 검사
  2. getAttribute
    - 어트리뷰트 값을 취득
  3. setAttribute
    - 어트리뷰트와 값을 설정
  4. removeAttribute
    - 지정한 어트리뷰트를 제거.


html 컨텐츠 조작법(텍스트노드 조작법)
아래의 방법중 어떤것을 쓰더라도 텍스트 노드 변경은 가능함
특징이 달라 기억이 필요하고 주의사항이 있으며
보완지식이 필요함.
1. textContent 
  - 요소의 텍스트 컨텐츠를 취득하거나 변경하는 방법
  - html태그들을 적어도 그대로 나옴 (마크업 미포함)
  예) let el4 = document.querySelector('#two');
el4.textContent = 'editing - textContent'; // 
el4.innerText = 'editing - innerText'; // (안씀)
el4.innerHTML = 'editing - innerHTML'; // 

2. innerText : 안씀 
  - 요소의 텍스트 컨텐츠에 접근하는 방법인데 미권장
  - 웹 표준에 포함되지 않음(비표준)
  - css에 순종적임( ex 해당 요소가 hidden이면 텍스트를 찾을수 없음 )
  - css에 순종적임 = css 고려를 엄청한다.(성능상 불리)

3. innerHTML
  - 마크업을 포함한 해당 요소의 모든 자식요소를 포함하는 컨텐츠를 
    하나의 문자열로 취득할 수 있음
  - 새로운 요소를 DOM에 추가할 수 있다
  - 마크업이 포함된 컨텐츠를 추가하는것은 외부 공격에 취야함
    
let els3 = document.querySelector('ul');
els3.textContent += '<li>aaa</li>'; // 요소가 추가 안됌.
els3.innerHTML += '<li>aaa</li>'; // 요소가 추가됨.


let el4 = document.querySelector('#two');
// el4.textContent = 'editing - textContent';
// el4.innerText = 'editing - innerText';
// el4.innerHTML = 'editing - innerHTML';

let els3 = document.querySelector('ul');
// els3.textContent += '<li>aaa</li>'; // 요소가 추가 안됌.
// els3.innerHTML += '<li>aaa</li>'; // 요소가 추가됨.

// 이런 경우를 크로스 스크립팅 공격이라함
// els3.innerHTML += '<img src="#" onerror="alert(\'해킹시도\')">';

 xss 방어를 위한 필터 라이브러리
 https://github.com/naver/lucy-xss-filter

 귀찮지만 더 안전한 방법
 innerHTML없이 다른 방법도 있음
  - DOM 을 직접 조작하는 방법

DOM을 직접 조작하여 요소를 추가하는 방법
  안전하지만 느리고 코드 가독성이 떨어짐. - 성능상 innerHTML이 유리함
  1. 요소노드를 생성 ( createElement() )
  2. 텍스트노드를 생성( createTextNode() ) 텍스트가 필요 없다면 생략 가능
  3. 생성된 요소를 DOM에 추가 ( appendChild() )

1. createElement - 요소 노드 생성
2. createTextNode - 텍스트 노드 생성
3. appendChild - 요소 추가 (해당요소의 자식으로. 부모요소가 없다면 body태그에 추가)
4. removeChild - 요소 추가

const newEl = document.createElement('li'); // 대소문자 무관
const newTxt = document.createTextNode('New Text Node Add');
// newEl.className = 'red';
// newEl.classList.add('red');
// newEl.setAttribute('class', 'red');
newEl.appendChild(newTxt);
els3.appendChild(newEl);

*/

const four = document.querySelector('#four');
four.style.color = 'blue';
four.style.fontSize = '3rem';
