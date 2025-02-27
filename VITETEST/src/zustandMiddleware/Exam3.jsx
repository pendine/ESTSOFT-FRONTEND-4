import { useEffect } from 'react'
import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'

const useStore = create(
  devtools(
    persist(
      set => ({
        products: [], // 상품 목록
        loading: false, // 로딩 상태
        error: null, // 에러 메시지

        // 상품 데이터 가져오기
        fetchProducts: async () => {
          set({ loading: true, error: null })
          try {
            const response = await fetch('https://dummyjson.com/products')
            const data = await response.json()
            set({ products: data.products, loading: false })
          } catch (error) {
            set({ error: 'Failed to fetch products', loading: false })
          }
        },

        // 상태 초기화
        clearProducts: () => set({ products: [], error: null })
      }),
      {
        name: 'product-storage', // localStorage 키 이름
        getStorage: () => localStorage // 저장소 설정
      }
    )
  )
)

function ProductList() {
  const { products, loading, error, fetchProducts } = useStore()

  useEffect(() => {
    fetchProducts() // 컴포넌트 마운트 시 데이터 가져오기
  }, [])

  if (loading) return <p>Loading...</p>
  if (error) return <p>{error}</p>

  return (
    <div>
      <h1>Product List</h1>
      <ul>
        {products.map(product => (
          <li key={product.id}>
            <strong>{product.title}</strong>: ${product.price}
          </li>
        ))}
      </ul>
    </div>
  )
}

function App() {
  return (
    <div>
      <ProductList />
    </div>
  )
}

export default App
