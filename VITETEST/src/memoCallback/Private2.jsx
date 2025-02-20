import React, { useState, useCallback } from 'react'

function Child({ onClick }) {
  console.log('🔄 자식 컴포넌트 렌더링됨')
  return <button onClick={onClick}>클릭!</button>
}

export default function App() {
  const [count, setCount] = useState(0)

  // useCallback으로 함수 메모이제이션
  const handleClick = useCallback(() => {
    console.log('버튼 클릭!')
  }, [])

  return (
    <div>
      <h2>useCallback 예제</h2>
      <button onClick={() => setCount(count + 1)}>카운트 증가: {count}</button>
      <Child onClick={handleClick} />
    </div>
  )
}
