// 책 목록 조회와 카트에 담기를 구현
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

export default function App() {
  const dispatch = useDispatch()

  const { items, status, error } = useSelector(state => state.books)

  useEffect(() => {
    dispatch()
  }, [dispatch])

  if (status === 'loading') return <p>Loading...</p>
  if (status === 'failed') return <p>Error: {error}</p>

  // 데이터 로딩이 필요해서 비동기로 처리
  //  비동기 => middleware 필요?
  return (
    <div>
      {items.map(book => (
        <div key={book.id}>
          <h2>{book.title}</h2>
          <p>가격 : ${book.price}</p>
        </div>
      ))}
    </div>
  )
}
