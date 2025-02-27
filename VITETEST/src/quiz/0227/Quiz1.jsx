//퀴즈 1
// 이 코드를 redux 구조로 변경.
import { create } from 'zustand'

const useStore = create(set => ({
  messages: [],
  currentTypingId: null,
  addMessage: message =>
    set(state => ({ messages: [...state.messages, message] })),
  setCurrentTypingId: id => set({ currentTypingId: id })
}))

export default useStore

//redux 구조로 변경 결과
// function Messages() {
//   const [message, setMessage] = useState([])
//   const [currentTypingId, setCurrentId] = useState(null)
//   const addMessage = message => {
//     setMessage(prev => [...prev, message])
//   }
//   const setCurrentTypingId = id => {
//     setCurrentId(id)
//   }
// }

// Slice 정의
const messagesSlice = createSlice({
  name: 'messages',
  initialState: {
    messages: [],
    currentTypingId: null
  },
  reducers: {
    addMessage: (state, action) => {
      state.messages.push(action.payload)
    },
    setCurrentTypingId: (state, action) => {
      state.currentTypingId = action.payload
    }
  }
})

// 액션 및 리듀서 export
export const { addMessage, setCurrentTypingId } = messagesSlice.actions
export const storeRedux = configureStore({
  reducer: {
    messages: messagesSlice.reducer
  }
})
// ----------------------------------------------------

//퀴즈2
// store.js (Redux)
import { configureStore, createSlice } from '@reduxjs/toolkit'

const productSlice = createSlice({
  name: 'products',
  initialState: { items: [], loading: false, error: null },
  reducers: {
    addProductStart: state => {
      state.loading = true
    },
    addProductSuccess: (state, action) => {
      state.items.push(action.payload)
      state.loading = false
    },
    addProductFailure: (state, action) => {
      state.error = action.payload
      state.loading = false
    }
  }
})

export const { addProductStart, addProductSuccess, addProductFailure } =
  productSlice.actions

export const addProduct = product => async dispatch => {
  dispatch(addProductStart())
  try {
    const response = await fetch('https://dummyjson.com/products/add', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(product)
    })
    const data = await response.json()
    dispatch(addProductSuccess(data))
  } catch (error) {
    dispatch(addProductFailure(error.message))
  }
}

export const store = configureStore({
  reducer: {
    products: productSlice.reducer
  }
})
