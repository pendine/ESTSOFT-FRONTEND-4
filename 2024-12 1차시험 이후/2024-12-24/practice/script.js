const times = document.querySelector('#times');
const loveMe = document.querySelector('.loveMe');

let clickTime = 0;
let timesClicked = 0;

/*
강사님은 더블클릭이 아니라 클릭으로 진행함.
클릭 했을때의 시간갭으로 더블클릭을 판단
그렇게 한 이유.
1. 더블클릭은 이벤트 자체가 경직되어있음.
 - 브라우저마다 판단시간이 다름
   그래서 더블클릭의 기준을 별도로 설정.
2. 충돌방지
  - 더블클릭 이벤트는 기본적으로 클릭이벤트를 포함함
  - 클릭이벤트와 충돌을 유발할 수 있음.
3. 반응형때문에(모바일 및 터치 디바이스 호환성)
  - 모바일 환경에서 더블클릭이 가능한가?
  - 터치기반 인터렉션이라는 더블클릭과 비슷한 기능이 있음
  - 하이브리드 형식(반응형 웹앱)에서 모바일을 고려하면
    click으로 두는것이 나음
결론적으로는 UX 때문에
*/

// 하트를 출력하기 위해서 이벤트 객체 사용
// fas fa-heart
loveMe.addEventListener('dblclick', function(e){
  // console.log("double clicked");
  clickTime++;
  times.innerHTML = clickTime;

  // 하트 모양 생성
  const heart = document.createElement('i');
  heart.classList.add('fas');
  heart.classList.add('fa-heart');
  
  // 클릭위치 확인
  const x = e.clientX;
  const y = e.clientY;

  // offset body를 기준으로 해당요소의 위치
  const leftOffset = e.target.offsetLeft;
  const topOffset = e.target.offsetTop;

  // console.log(leftOffset, topOffset);

  const xInside = x - leftOffset;
  const yInside = y - topOffset;

  heart.style.top = `${yInside}px`;
  heart.style.left = `${xInside}px`;

  loveMe.appendChild(heart);
})