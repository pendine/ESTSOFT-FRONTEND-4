import { create } from 'zustand'

// zustand는 중앙 집중형 스토어를 기반으로
// react의 상태관리를 진행
const useStore = create(set => ({
  bears: 0,
  increase: () => set(state => ({ bears: state.bears + 1 })),
  reset: () => set({ bears: 0 })
}))

export default function Counter() {
  const { bears, increase, reset } = useStore()
  return (
    <div>
      <h1>{bears}</h1>
      <button onClick={increase}>increase</button>
      <button onClick={reset}>reset</button>
    </div>
  )
}
