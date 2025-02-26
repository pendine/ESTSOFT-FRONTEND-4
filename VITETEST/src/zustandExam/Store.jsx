// Redux의 데이터 흐름
// action -> dispatch
// -> reducer -> store -> state 변경
// -> ui컴포넌트 전달 (구독 컴포넌트 리렌더링)

// Zustand의 데이터 흐름
// 직접 상태 수정 -> 스토어 업데이트 -> 리렌더링
// ==========================================

// 액션 타입(상수형태 변수값에만 사용)
const LOGIN = 'LOGIN'
const LOGOUT = 'LOGOUT'

// 액션 생성자
export const login = user => ({
  type: LOGIN,
  payload: user
})

export const logout = () => ({ type: LOGOUT })

// 리듀서
const initialState = {
  isLoggedIn: false,
  user: null
}

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        isLoggedIn: true,
        user: action.payload
      }
    case LOGOUT:
      return initialState
    default:
      return state
  }
}

// 스토어 생성
import { createStore } from 'redux'
const store = createStore(authReducer)

// 컴포넌트 사용
const LoginButton = () => {
  const dispatch = useDispatch()
  const isLoggedIn = useSelector(state => state.isLoggedIn)

  const handleLogin = async () => {
    const user = await fetchUser()
    dispatch(login(user))
  }

  return (
    <button onClick={isLoggedIn ? dispatch(logout) : handleLogin}>
      {isLoggedIn ? 'Logout' : 'Login'}
    </button>
  )
}
