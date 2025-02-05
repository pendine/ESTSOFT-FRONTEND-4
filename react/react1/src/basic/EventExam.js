import React, {useState} from "react";
/**
실습 예시 1
1. "안녕하세요" 버튼 만들기
2. 버튼 클릭하면 메시지가 "안녕히가세요"로 변경
3. 다시 클릭하면 "안녕하세요"로 변경
 */

function Quiz(){
  
  // 훅 사용
  const [msg, setMsg] = useState("안녕하세요");

  let quizEvent = () =>{
    if(msg==="안녕하세요"){
      setMsg("안녕히가세요");
    }else{
      setMsg("안녕하세요");
    }
  }

  return(
    <button 
      onClick={quizEvent} 
      type="button"
    >
      {msg}
    </button>
  )

}

/*
실습 예시 2
요구사항:
1. 이모지와 숫자를 보여주는 컴포넌트를 만들기
2. 이모지를 클릭할때마다 숫자 1씩 증가
3. 숫자가 10이 되면 "최대 수에 도달했습니다"라는 메시지 출력
*/

function Quiz2(){
  const [count, setCount] = useState(0);

  // 내꺼. 안됨. 숫자변경 안되고 업데이트 안됨. 오류출력됨
  // let update = () =>{
  //   this.count++;
  //   console.log("count : " + count);
  //   if(count === 10){
  //     alert("최대 수에 도달했습니다.");
  //   }
  // }
  // 
  // return(
  //   <>
  //     <p>{count}</p>
  //     <button onClick={() => update} type="button">이모지</button>
  //   </>
  // )

  const clickCnt = () =>{
    if(count<10){
      setCount(count+1);
    }
  }

  return (
    <div>
      <div onClick={clickCnt}>
        ☆ {count}
      </div>
      {count === 10 && <p>최대클릭 수에 도달</p>}
    </div>
  );
}

export default Quiz2;