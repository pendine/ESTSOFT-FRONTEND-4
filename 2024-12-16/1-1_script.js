const smallCups = document.querySelectorAll('.cup-small');
const liters = document.querySelector("#liters");
const percentage = document.querySelector("#percentage");
const remained = document.querySelector("#remained");

smallCups.forEach((cup, idx) =>{
    cup.addEventListener('click', ()=>{
        // 마지막 컵이 다 채워져있는가
        if(idx===7 &&
            smallCups[idx].classList.contains("full")
        ){

        }
        // 현재컵이 채워져 있고, 다음컵이 비어있는 경우
        else if(smallCups[idx].classList.contains('full')
            && !smallCups[idx].nextElementSibling.classList.contains('full')
        )
        {
            idx--;
        }

        // 컵 상태 업데이트
        smallCups.forEach((cup, idx2) =>{
            //선택된 컵까지 모든 컵을 채우기 위해
            if(idx2 <= idx){
                cup.classList.add("full");
            }
            //그이후의 컵들은 비움
            else{
                cup.classList.remove("full");
            }
        })

        //큰컵 채우기
        updateBigCup();
    });
})

function updateBigCup(){

    const fullCups = document.querySelectorAll('.cup-small.full').length;
    const totalCups = smallCups.length;
    
    if(fullCups === 0) {
        percentage.style.visibility = 'hidden'
        percentage.style.height = 0
    }
    //채워진 비율에 따라 높이 동적 조절.
    else {
        percentage.style.visibility = 'visible'
        percentage.style.height = `${fullCups / totalCups * 330}px`
        percentage.innerText = `${fullCups / totalCups * 100}%`
    }

    // 모든 컵들이 채워졌을때의 처리 방안
    if(fullCups === totalCups) {
        remained.style.visibility = 'hidden'
        remained.style.height = 0
    } else {
        remained.style.visibility = 'visible'
        //답은 용량 계산 공식.
        // 2: 전체용량 2L
        // 250 : 작은컵의 용량
        // fullCups : 채워진 컵의 수
        // 1000 : 1 L
        liters.innerText = `${2 - (250 * fullCups / 1000)}L`
    }
}