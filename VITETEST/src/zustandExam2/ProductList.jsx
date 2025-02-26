import { useEffect } from 'react'
import { useProductStore } from './productStore'

function ProductList() {
  const { products, loading, error, fetchProducts } = useProductStore()

  useEffect(() => {
    fetchProducts()
  }, [])

  if (loading) return <div>로딩 중...</div>
  if (error) return <div>{error}</div>

  return (
    <div className="product-grid">
      {products.map(product => (
        <div
          key={product.id}
          className="product-card">
          <img
            src={product.thumbnail}
            alt={product.title}
          />
          <h3>{product.title}</h3>
          <p>${product.price}</p>
        </div>
      ))}
    </div>
  )
}

export default ProductList
