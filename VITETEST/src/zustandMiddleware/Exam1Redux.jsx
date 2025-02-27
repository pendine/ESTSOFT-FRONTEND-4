import { configureStore, createSlice } from '@reduxjs/toolkit'
import { useDispatch, useSelector } from 'react-redux'

// zustands에서의 미들웨어를
// redux로 변경

const persistMiddleware = store => next => action => {
  // 액션을 리듀서로 전달
  const result = next(action)
  // 최신상태 갖고오기
  const state = store.getstate()
  localStorage.setItem('counter-storage', JSON.stringify(state.counter)) // 상태 저장
  return result
}

const counterSlice = createSlice({
  name: 'counter',
  initialState: { count: 0 },
  reducers: {
    increase: state => {
      state.count += 1
    },
    reset: state => {
      state.count = 0
    }
  }
})

export const { increase, reset } = counterSlice.actions

export const store = configureStore({
  reducer: {
    counter: counterSlice.reducer
  }
})

export default function App() {
  // const { count, increase, reset } = useStore()
  const count = useSelector(state => state.counter.count)
  const dispatch = useDispatch()

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => dispatch(increase())}>Increment</button>
      <button onClick={() => dispatch(reset())}>Reset</button>
    </div>
  )
}
