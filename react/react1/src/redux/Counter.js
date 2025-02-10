// 간단한 카운팅 어플

import {useDispatch, useSelector} from 'react-redux'
import {increment, decrement, incrementByAmount} from './counterSlice.js'

function Counter(){

  // 현재 카운터 값 자체를 subscript(가지고있음)
  // 아래의 두줄 코드는 값을 세팅해두고
  // 상태 변화가 생기기 전 까지 대기

  // useSelector : 스토어의 상태를 조회하는 훅
  const count = useSelector((state) => state.counter.value )
  const dispatch = useDispatch();

  return(
    <div>
      <h2>counting : {count}</h2>
      <button onClick={() => { dispatch( increment() )}}>증가</button>
      <button onClick={() => { dispatch( decrement() )}}>감소</button>
      <button onClick={() => { dispatch( incrementByAmount(5) )}}>5증가</button>
    </div>
  );
}

export default Counter;