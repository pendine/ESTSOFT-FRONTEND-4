import { useEffect, useMemo, useState } from 'react'

export default function List1() {
  // useState 선언시 set함수가 없다면 상수로써 사용가능
  const [number] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9])
  const [count, setCount] = useState(0)

  const maxNumber = useMemo(() => {
    console.log('최대값 계산 ', Math.max(...number))
    return Math.max(...number)
  }, [number])

  useEffect(() => {
    console.log('useMemo 변경됨!')
  }, [number])

  return (
    <div>
      <p>최대값: {maxNumber}</p>
      <p>카운트: {count}</p>
      <button onClick={() => setCount(count + 1)}>카운트 증가</button>
    </div>
  )
}
