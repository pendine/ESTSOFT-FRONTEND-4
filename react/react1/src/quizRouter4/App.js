// 요구사항:
// 1. 현재 값과 이전 값을 비교하여 표시하는 컴포넌트를 만드세요
// 2. 값이 증가했는지 감소했는지 화살표로 표시하세요 (↑ 또는 ↓)
// 3. 변화량도 함께 표시하세요

import { createContext, useContext, useEffect, useState } from "react";

// 4. 첫 렌더링시에는 이전 값 대신 "-"를 표시하세요
function ValueTracker() {
  // 여기에 코드를 작성하세요
  const [count, setCount] = useState(0);
  const [before, setBefore] = useState(0);
  const [msg, setMsg] = useState(0);

  useEffect(()=>{
    setMsg('-');
  },[])

  const setting = (e) => {
    e.preventDefault();
    let result= count - before;
    setBefore(count);
    // console.log('result : ' , result);
    if(result > 0 ){
      setMsg( result + "만큼 증가 ↑")
    }else if(result < 0){
      setMsg( result + "만큼 감소 ↓")
    }else{
      setMsg( "변화 없음");
    }
  }

  return(
    <form onSubmit={setting}>
      <input onChange={ (e) => setCount(e.target.value)}/>
      <button type='submit'>적용</button>
      <p>{msg}</p>
    </form>
  );
}
export default ValueTracker;

// 요구사항:
// 1. localStorage와 동기화되는 상태를 관리하는 커스텀 훅을 만드세요
// 2. 새로고침해도 데이터가 유지되어야 합니다
// 3. 여러 컴포넌트에서 같은 키로 접근하면 데이터가 동기화되어야 합니다
// 4. JSON 형식의 데이터도 처리할 수 있어야 합니다

export const Context = createContext(null);
function TodoApp() {
  // 여기에 코드를 작성하세요

  const [item, setItem] = useEffect(null);

  useEffect(()=>{
    if(localStorage.getItem('item')){
      setItem( localStorage.getItem('item') );
    }
  },[]);

}
// export const getItem = () => useContext(Context);