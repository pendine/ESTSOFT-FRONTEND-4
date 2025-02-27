import { create } from 'zustand'
import { persist } from 'zustand/middleware'

// zustands에서의 미들웨어
// case1: 상태 지속성 관련
const useStore = create(
  // persist : 브라우저의 저장소에 자동으로 저장하고
  // 어플리케이션이 리로딩될때 저장된 상태를 복원하는 기능 제공
  persist(
    set => ({
      count: 0,
      increase: () => set(state => ({ count: state.count + 1 })),
      reset: () => set({ count: 0 })
    }),
    // 이 속성들은 persist 미들웨어에 포함된 속성들
    {
      name: 'storage1',
      getStorage: () => localStorage
    }
  )
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
