// slice를 통해 reducer와 Store를 정의
// createSlice : redux의 상태와 관련된 로직을
//         한곳에서 정의하도록 도움을 주는 함수
import { createSlice } from '@reduxjs/toolkit'
const todosSlice = createSlice({
  name: 'todos',
  initialState: [],
  reducers: {
    addTodo: (state, action) => {
      state.push(action.payload)
    }
  }
})
// 액션 생성자 내보내기
export const { addTodo } = todosSlice.actions
// 리듀서 내보내기
export default todosSlice.reducer
