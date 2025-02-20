import { useEffect, useState } from 'react'

export default function RenderTest() {
  const [data, setData] = useState([])
  const [renderCount, setRenderCount] = useState(0)

  // 매우 큰 데이터셋 생성
  const generateHugeData = () => {
    const newData = []
    for (let i = 0; i < 10000; i++) {
      newData.push({
        id: i,
        value: Math.random() * 1000,
        text: `Item ${i}`.repeat(100) // 매우 긴 텍스트
      })
    }
    return newData
  }

  // 성능 측정을 위한 래퍼 컴포넌트
  const MeasuredList = ({ items }) => {
    const startTime = performance.now()

    useEffect(() => {
      const endTime = performance.now()
      console.log(`렌더링 시간: ${endTime - startTime}ms`)
      setRenderCount(prev => prev + 1)
    })

    return (
      <div style={{ height: '500px', overflow: 'auto' }}>
        {items.map(item => (
          <div
            key={item.id}
            style={{ padding: '20px', border: '1px solid' }}>
            <h3>ID: {item.id}</h3>
            <p>{item.text}</p>
            <span>{item.value}</span>
          </div>
        ))}
      </div>
    )
  }
}
