import { atom, selector, useRecoilState, useRecoilValue } from 'recoil'

// https://dummyjson.com/products/

export const productStockState = atom({
  key: 'productStockState',
  default: async productId => {
    const res = await fetch(`https://dummyjson.com/products/${productId}`)
    const product = await res.json()
    return product.stock
  }
})

export const totalStockState = selector({
  key: 'totalStockState',
  get: ({ get }) => {
    const selectedIds = [1, 2, 3] // 관리 대상 제품 ID 목록
    return selectedIds.reduce((sum, id) => {
      return sum + get(productStockState(id))
    }, 0)
  }
})

export default function App() {
  const totalStock = useRecoilValue(totalStockState)
  const [phoneStock, setPhoneStock] = useRecoilState(productStockState(1)) // iPhone 9
  const [laptopStock, setLaptopStock] = useRecoilState(productStockState(2)) // iPhone X

  return (
    <div>
      <h3>📦 재고 관리 시스템</h3>
      <div>
        <p>iPhone 9 재고: {phoneStock}</p>
        <button onClick={() => setPhoneStock(s => s - 1)}>출고</button>
      </div>
      <div>
        <p>iPhone X 재고: {laptopStock}</p>
        <button onClick={() => setLaptopStock(s => s - 1)}>출고</button>
      </div>
      <p>📊 전체 재고: {totalStock}</p>
    </div>
  )
}
