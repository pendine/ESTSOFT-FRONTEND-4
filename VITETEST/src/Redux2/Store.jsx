import { configureStore, createSlice } from '@reduxjs/toolkit'

const counterSlice = createSlice({
  name: 'counter',
  initialState: { counter: 0 },
  reducers: {}
})

export const store = configureStore({
  reducer: {
    counter: counterSlice.reducer
  }
})
