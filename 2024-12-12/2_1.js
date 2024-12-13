
// 자바스크립트 이벤트 구현 패턴
// 1. 요소들을 저장할 공간을(이벤트의 주체) 하나 파야한다
// panels가 요소를 저장할 공간이 된다면
// 요소 1개를 저장 (혹은 하나 선택 /querySelector)
// 여러개의 요소를 저장이나 선택(querySelectorAll)
const panels = document.querySelectorAll('.panels');


function removeThat(){
    panels.forEach(panel =>{
        panel.classList.remove('active');
    })
}