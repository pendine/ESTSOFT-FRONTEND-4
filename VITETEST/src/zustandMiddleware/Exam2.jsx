import { create } from 'zustand'
import { devtools } from 'zustand/middleware'

// zustands의 Devtool
//  크롬 확장 프로그램의 redux Devtool 설치 필요
const useStore = create(
  // persist : 브라우저의 저장소에 자동으로 저장하고
  // 어플리케이션이 리로딩될때 저장된 상태를 복원하는 기능 제공
  devtools(set => ({
    count: 0,
    increase: () => set(state => ({ count: state.count + 1 })),
    decrease: () => set(state => ({ count: state.count - 1 }))
  }))
)

export default function App() {
  const { count, increase, reset } = useStore()

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increase}>Increment</button>
      <button onClick={reset}>Reset</button>
    </div>
  )
}
