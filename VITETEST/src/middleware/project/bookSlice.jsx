import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

// 비동기로 액션 생성 => api서버에 요청
export const fetchBooks = createAsyncThunk('./fetchBooks', async () => {
  // const response = await fetch('api/books')
  const response = await fetch('http://127.0.0.1:5000/api/books')
  console.log(response.json)
  return response.json()
})

// reducers (동기액션) : extraReducers (비동기 액션)
const bookSlice = createSlice({
  name: 'books',
  initialState: { items: [], status: 'idle' },
  reducers: {},
  extraReducers: builder => {
    // fetchBooks.pending => 데이터 요청시작
    // fetchBooks.fulfilled => 데이터 요청 완료
    // fetchBooks.rejected => 데이터 요청 실패
    builder
      .addCase(fetchBooks.pending, state => {
        state.status = 'loading'
      })
      .addCase(fetchBooks.fulfilled, (state, action) => {
        state.status = 'succeeded'
        state.items = action.payload
      })
      .addCase(fetchBooks.rejected, (state, action) => {
        state.status = 'fail'
        state.error = action.error.meesage
      })
  }
})

// 🔹 왜 bookSlice.reducer인가?
// createSlice는 단일 reducer 객체를 생성합니다.
// reducers는 동기 액션을 정의하는 부분이며, 자체적으로 export하지 않습니다.
// extraReducers는 비동기 액션을 처리하는 부분이지만, bookSlice.reducer에 포함되어 export됩니다.
export default bookSlice.reducer
