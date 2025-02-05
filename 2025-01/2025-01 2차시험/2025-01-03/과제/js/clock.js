// const userPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches; 
// console.log( userPrefersDark );
// false

// const userPrefers = window.matchMedia('prefers-color-scheme'); 
// console.log(  userPrefers ); 
// MediaQueryList {media: 'prefers-color-scheme', matches: false, onchange: null}

const root = document.documentElement; // <html> 선택

// 초기 테마 설정
const userPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
root.setAttribute('data-theme', userPrefersDark ? 'dark' : 'light');

// 버튼 클릭으로 테마 변경
// modeBtn.addEventListener('click', () => {
//   const currentTheme = root.getAttribute('data-theme');
//   const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
//   root.setAttribute('data-theme', newTheme);
// });

let modeBtn = document.querySelector(".modeBtn");
let modeIcon = document.querySelector(".fas");
modeBtn.addEventListener('click' , function(){
  const currentTheme = root.getAttribute('data-theme');
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
  root.setAttribute('data-theme', newTheme);

  if(modeIcon.className==='fas fa-moon'){
    modeIcon.className ='fas fa-sun';
    userPrefersDark = true;
  }else{
    modeIcon.className='fas fa-moon';
  }
})
// scss 의 color-scheme로는 사용자의 테마에 종속됨
// 버튼으로 구성하려면 따로 해야함


// 선택자 안써서 한참해맸네;
let ampmSpan = document.querySelector('.ampm');
let second = document.querySelector('.sec');
let minute = document.querySelector('.min');
let hour = document.querySelector('.hr');
let date = document.querySelector('.date');
let timeText = document.querySelector('.timeText');
let timeInstance = new Date();
let ampm = ( timeInstance.getUTCHours() + 9 ) / 12 > 0 ? '오후' : '오전';

ampmSpan.innerHTML = ampm;
// 시작하자마자 시간 초기화
second.innerHTML = timeInstance.getUTCSeconds();
minute.innerHTML = timeInstance.getUTCMinutes();
hour.innerHTML = ( timeInstance.getUTCHours() + 9 ) % 12;
date.innerHTML = timeInstance.getUTCFullYear() 
                + " / "+ (timeInstance.getUTCMonth()+1) 
                + " / " + timeInstance.getUTCDate();
// 시각장애인 텍스트 지원
timeText.innerHTML = timeInstance.getUTCFullYear() + "년 "
                  + (timeInstance.getUTCMonth()+1) + "월"
                  + timeInstance.getUTCDate() + "일"
                  + ampm
                  + ( timeInstance.getUTCHours() + 9 ) % 12 + "시"
                  + timeInstance.getUTCMinutes() + "분"
                  + timeInstance.getUTCSeconds() + "초";

// 초 단위 동작
let secStart = setInterval( function(){
  // 계속 새로운 객체를 호출해도 돼나? ;;
  // 근데 새로운 객체를 호출 안하면 객체가 생성된 시간에 고정되버림
  // setMilliseconds라는 메서드가 있어서 써보니 해결.
  // 초단위를 누적시켜서 이후시간단위도 같이 업데이트하는듯.
  timeInstance.setMilliseconds(1000);
  // console.log("start Sec Interval sec : " , new Date().getUTCSeconds());
  // console.log("start Sec Interval sec : " , timeInstance.getUTCSeconds(), "min : " , timeInstance.getUTCMinutes());
  second.innerHTML = timeInstance.getUTCSeconds();
  
  timeText.innerHTML = timeInstance.getUTCFullYear() + "년 "
                    + (timeInstance.getUTCMonth()+1) + "월"
                    + timeInstance.getUTCDate() + "일"
                    + ampm
                    + ( timeInstance.getUTCHours() + 9 ) % 12 + "시"
                    + timeInstance.getUTCMinutes() + "분"
                    + timeInstance.getUTCSeconds() + "초"

},1000);

// 분 단위 동작
let minStart = setInterval(function(){
  minute.innerHTML = timeInstance.getUTCMinutes();
},60*1000);

// 시간 단위 동작
let hourStart = setInterval(function(){
  hour.innerHTML = ( timeInstance.getUTCHours() + 9 ) % 12;
  ampmSpan.innerHTML = ampm;
},60*60*1000);

// 일 단위 동작
let dateStart = setInterval(function(){
  date.innerHTML = timeInstance.getUTCFullYear() 
                + " / "+ (timeInstance.getUTCMonth()+1) 
                + " / " + timeInstance.getUTCDate();

},24*60*60*1000);