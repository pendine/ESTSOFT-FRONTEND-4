// store.js
import { configureStore, createAsyncThunk, createSlice } from '@reduxjs/toolkit'

// 아래의 redux 코드를 recoil 형태로 바꿔주세요.
// 비동기 액션 생성
export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
  const response = await fetch('https://dummyjson.com/users?limit=10')
  if (!response.ok) throw new Error('Failed to fetch users')
  return response.json()
})

// Slice 생성
const userSlice = createSlice({
  name: 'users',
  initialState: {
    users: [],
    selectedUser: null,
    status: 'idle', // loading | succeeded | failed
    error: null
  },
  reducers: {
    selectUser(state, action) {
      state.selectedUser = action.payload
    }
  },
  extraReducers: builder => {
    builder
      .addCase(fetchUsers.pending, state => {
        state.status = 'loading'
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.status = 'succeeded'
        state.users = action.payload.users
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message
      })
  }
})

export const { selectUser } = userSlice.actions
export default configureStore({
  reducer: {
    users: userSlice.reducer
  }
})

function UserList() {
    const dispatch = useDispatch();
    const { users, status, error } = useSelector((state) => state.users);
  
    useEffect(() => {
      dispatch(fetchUsers());
    }, [dispatch]);
  
    if (status === 'loading') return <p>Loading...</p>;
    if (status === 'failed') return <p>Error: {error}</p>;
  
    return (
      <ul>
        {users.map((user) => (
          <li key={user.id} onClick={() => dispatch(selectUser(user))}>
            {user.firstName} {user.lastName}
          </li>
        ))}
      </ul>
    );
  }
  


function UserDetail() {
    const selectedUser = useSelector((state) => state.users.selectedUser);
  
    if (!selectedUser) return <p>Select a user to see details</p>;
  
    return (
      <div>
        <h2>{selectedUser.firstName} {selectedUser.lastName}</h2>
        <p>Email: {selectedUser.email}</p>
        <p>Phone: {selectedUser.phone}</p>
      </div>
    );
  }
  
  export default function App() {
    return (
      <div>
        <h1>User Management</h1>
        <UserList />
        <UserDetail />
      </div>
    );
  }