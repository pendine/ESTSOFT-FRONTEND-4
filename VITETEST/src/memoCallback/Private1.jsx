import React, { useState, useMemo } from 'react'

function ExpensiveComponent({ num }) {
  // 값이 바뀔 때만 실행
  const squaredValue = useMemo(() => {
    console.log('🎯 무거운 계산 수행 중...')
    return num * num
  }, [num])

  return <p>제곱값: {squaredValue}</p>
}

export default function App() {
  const [count, setCount] = useState(0)
  const [num, setNum] = useState(2)

  return (
    <div>
      <h2>useMemo 예제</h2>
      <button onClick={() => setCount(count + 1)}>카운트 증가: {count}</button>
      <button onClick={() => setNum(num + 1)}>숫자 변경: {num}</button>
      <ExpensiveComponent num={num} />
    </div>
  )
}
