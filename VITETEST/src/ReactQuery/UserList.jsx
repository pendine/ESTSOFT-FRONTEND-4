// 외부에 필요한 데이터를 받아오는데
// react-query사용

// react-query 적용전 현재 설치 버전 확인 필요
// useQuery : 데이터를 가져오고 로딩 상태와 에러상태를 관리하는 hook
import { useQuery } from '@tanstack/react-query'

export default function UserList() {
  // useQuery hook을 이용한 데이터 패칭
  const { data, isLoading, error } = useQuery({
    // 상태 관리를 위해 사용하는 고유 키값
    queryKey: ['users'],
    //
    queryFn: async () => {
      const response = await fetch('https://jsonplaceholder.typicode.com/users')
      return response.json()
    }
  })

  return (
    <ul>
      {data.map(user => (
        <li key={user.id}>
          {user.name} - {user.email}
        </li>
      ))}
    </ul>
  )
}
