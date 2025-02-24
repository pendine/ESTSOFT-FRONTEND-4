import { configureStore } from '@reduxjs/toolkit'
import todosSlice from './todosSlice'

const store = configureStore({
  reducer: {
    todos: todosSlice.reducer
  }
})

export default store
