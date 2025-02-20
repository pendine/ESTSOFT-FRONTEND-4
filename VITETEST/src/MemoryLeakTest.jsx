import { useEffect, useState } from 'react'

export default function MemoryLeakTest() {
  const [memory, setMemory] = useState([])
  const [leakCount, setLeakCount] = useState(0)

  const createLeak = () => {
    // 의도적으로 메모리 누수 발생
    const leakyData = new Array(1000000).fill('🔥').map((_, i) => ({
      id: i,
      data: new Array(1000).fill('메모리 누수 데이터')
    }))

    setMemory(prev => [...prev, ...leakyData])
    setLeakCount(prev => prev + 1)
  }

  useEffect(() => {
    const interval = setInterval(() => {
      console.log(
        `현재 힙 사이즈: ${performance.memory?.usedJSHeapSize / 1048576} MB`
      )
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div>
      <button onClick={createLeak}>메모리 누수 발생시키기</button>
      <p>누수 발생 횟수: {leakCount}</p>
    </div>
  )
}
