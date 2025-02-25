import { configureStore } from '@reduxjs/toolkit'
import booksReducer from './bookSlice'
// import cartReducer from './cartSlice'

const rootReducer = {
  books: booksReducer
  // cart: cartReducer
}

const store = configureStore({
  reducer: rootReducer
})

export default store
