// 요구사항:
// Zustand를 사용하여 사용자 목록 상태 관리

// DummyJSON API에서 사용자 데이터 가져오기

// 사용자 목록과 사용자 상세 프로필 페이지 구현

// 상세 요구사항:
// 1. 사용자 목록 페이지
// https://dummyjson.com/users?limit=10 API를 사용하여 10명의 사용자 데이터 로드

// 각 사용자의 이름, 이메일, 회사명을 목록에 표시

// 로딩 중 상태와 에러 상태 처리

// 사용자 이름을 클릭하면 상세 페이지로 이동

// 2. 사용자 상세 페이지
// https://dummyjson.com/users/{id} API를 사용하여 특정 사용자의 상세 정보 로드

// 사용자의 프로필 이미지, 이름, 이메일, 전화번호, 주소, 회사 정보 표시

// 목록으로 돌아가는 버튼 구현

// 3. Zustand 상태 관리
// 사용자 목록, 선택된 사용자, 로딩 상태, 에러 상태를 Zustand 스토어에서 관리

// API 호출 함수를 스토어 내부에 구현

// 4. 라우팅
// React Router를 사용하여 다음 경로 구현:

// / - 사용자 목록 페이지

// /users/:id - 사용자 상세 페이지

import { Link, Outlet, RouterProvider, useLoaderData } from 'react-router-dom'

const router = [
  {
    index: true
  },
  {
    path: '/users',
    element: <UserList />,
    loader: async () => {
      const res = await fetch(`https://dummyjson.com/users?limit=10`)
      return res.json
    },
    children: [
      {
        path: ':id',
        element: <UserDetail />,
        loader: async () => {
          const res = await fetch(`https://dummyjson.com/users/${id}`)
          return res.json
        }
      }
    ]
  }
]

const UserList = () => {
  const { users } = useLoaderData()

  return (
    <div>
      <div>
        {users.map(user => (
          <Link
            key={user.id}
            to={`/users/${user.id}`}>
            <div>
              <h3>
                name : {user.firstName} {user.maidenName} {user.lastName}
              </h3>
              {/* <img src={user.image} /> */}
              <p>email : {user.email}</p>
              {/* <p>phone : {user.phone}</p>
          <p>address : {user.address.address}</p> */}
              <p>company : {user.company.name}</p>
            </div>
          </Link>
        ))}
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  )
}

const UserDetail = () => {
  const user = useLoaderData()

  return (
    <div>
      <h3>
        name : {user.firstName} {user.maidenName} {user.lastName}
      </h3>
      <img src={user.image} />
      <p>email : {user.email}</p>
      <p>phone : {user.phone}</p>
      <p>address : {user.address.address}</p>
      <p>company : {user.company.name}</p>
    </div>
  )
}

const Layout = () => {
  return (
    <div>
      <div>
        <ul>
          <li>
            {' '}
            <Link to="userlist">
              <UserList />
            </Link>{' '}
          </li>
        </ul>
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  )
}

const App = () => {
  return (
    <RouterProvider router={router}>
      <Layout />
    </RouterProvider>
  )
}

export default App
