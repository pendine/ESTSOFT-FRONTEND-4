import { Suspense, useEffect } from 'react'
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil'
import {
  selectedUserIdState,
  userListQuery,
  userQuery,
  usersListState
} from './atoms'

function UserList() {
  const [selectedUserId, setSelectedUserId] =
    useRecoilState(selectedUserIdState)
  const setUsersList = useSetRecoilState(usersListState)
  const users = useRecoilValue(userListQuery)

  useEffect(() => {
    setUsersList(users)
  }, [users, setUsersList])

  return (
    <div className="user-list">
      <h2>사용자 목록</h2>
      <ul>
        {users.map(user => (
          <li
            key={user.id}
            onClick={() => setSelectedUserId(user.id)}
            style={{
              fontWeight: user.id === selectedUserId ? 'bold' : 'normal',
              cursor: 'pointer'
            }}>
            {user.firstName} {user.lastName}
          </li>
        ))}
      </ul>
    </div>
  )
}

function LoadingFallback() {
  return <div>loading....</div>
}

function UserDetail() {
  const user = useRecoilValue(userQuery)

  return (
    <div className="user-detail">
      <h2>사용자 정보</h2>
      <div>
        <img
          src={user.image}
          alt={user.firstName}
          width="100"
        />
        <h3>
          {user.firstName} {user.lastName}
        </h3>
        <p>이메일: {user.email}</p>
        <p>전화번호: {user.phone}</p>
        <p>
          주소: {user.address.address}, {user.address.city}
        </p>
        <p>회사: {user.company.name}</p>
      </div>
    </div>
  )
}

export default function App() {
  return (
    <div className="app">
      <h1>user Manager</h1>
      <div style={{ display: 'flex', gap: '20px' }}></div>
      <Suspense fallback={<LoadingFallback />}>
        <UserList />
      </Suspense>
      <Suspense fallback={<LoadingFallback />}>
        <UserDetail />
      </Suspense>
    </div>
  )
}
