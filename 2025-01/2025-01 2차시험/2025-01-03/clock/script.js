var hourEl = document.querySelector('.hour');
var minEl = document.querySelector('.minute');
var secondEl = document.querySelector('.second');
var timeEl = document.querySelector('.time');
var dateEl = document.querySelector('.date');
// 다크모드 컨트롤을 위해 선언
var toggle = document.querySelector('.toggle');

const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

toggle.addEventListener('click', function(event){
    var html=document.querySelector('html');
    if(html.classList.contains('dark')){
        html.classList.remove('dark');
        event.target.innerHTML = 'Dark mode';
    }else{
        html.classList.add('dark');
        event.target.innerHTML='Light mode';
    }
})

function setTime(){
    const time = new Date();
    const month = time.getMonth()
    const day = time.getDay()
    const date = time.getDate()
    const hours = time.getHours()
    const hoursForClock = hours >= 13 ? hours % 12 : hours;
    const minutes = time.getMinutes()
    const seconds = time.getSeconds()
    const ampm = hours >= 12 ? 'PM' : 'AM'

    // -50, -100 : 시계 바늘의 회전 중심을 맞추기 위한 공식
    // 요소를 자신의 크기 기준 으로 수평중앙 -50%, 수직상단 -100%
    hourEl.style.transform = `translate(-50%, -100%) rotate(${scale(hoursForClock, 0, 12, 0, 360)}deg)`
    minEl.style.transform = `translate(-50%, -100%) rotate(${scale(minutes, 0, 60, 0, 360)}deg)`
    secondEl.style.transform = `translate(-50%, -100%) rotate(${scale(seconds, 0, 60, 0, 360)}deg)`

    timeEl.innerHTML = `${hoursForClock}:${minutes < 10 ? `0${minutes}` : minutes} ${ampm}`
    dateEl.innerHTML = `${days[day]}, ${months[month]} <span class="circle">${date}</span>`
}

setInterval(setTime, 1000);


// 특정한 숫자 범위를 다른 숫자범위로 변환을 위해 준비한 함수
// 초 -> 각도록 변환
// in_min, max : 입력숫자의 최소값 최대값(초단위)
// out_min, max : 출력숫자의 최소값 최대값 (각도 0~360)
const scale = (number, inMin, inMax, outMin, outMax) => {
    return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}

//과제 => 59초에서 0초로 변환할때
// 초침이 반시계방향으로 돌아가는 현상 수정하기
