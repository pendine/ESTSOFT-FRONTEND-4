import { selectorFamily, useRecoilValue } from 'recoil'
import StockManager from './AtomFamilyExam'

// 제품별 가격 변동 기록 (selectorFamily)
export const priceHistoryQuery = selectorFamily({
  key: 'priceHistoryQuery',
  get: productId => async () => {
    try {
      const response = await fetch(
        `https://dummyjson.com/products/${productId}`
      )
      const product = await response.json()

      // 가격 변동 데이터 생성 (최근 5일치)
      const basePrice = product.price
      return Array.from({ length: 5 }, (_, i) => ({
        date: new Date(Date.now() - i * 86400000).toISOString().split('T')[0],
        price: Math.round(basePrice * (1 - Math.random() * 0.1 * i))
      })).reverse()
    } catch (error) {
      console.error('가격 정보 조회 실패:', error)
      return []
    }
  }
})

// 사용 예시
function PriceHistory({ productId }) {
  const history = useRecoilValue(priceHistoryQuery(productId))

  return (
    <div>
      <h4>📈 가격 변동 추이</h4>
      <ul>
        {history.map((entry, index) => (
          <li key={index}>
            {entry.date}: ${entry.price.toFixed(2)}
            {index > 0 && (
              <span
                style={{
                  color:
                    history[index - 1].price > entry.price ? 'green' : 'red',
                  marginLeft: '10px'
                }}>
                (
                {((entry.price / history[index - 1].price - 1) * 100).toFixed(
                  1
                )}
                %)
              </span>
            )}
          </li>
        ))}
      </ul>
    </div>
  )
}

// 전체 조합 예시
export default function ProductAnalyzer() {
  return (
    <div>
      <h2>📊 제품 분석 대시보드</h2>
      <StockManager />
      <PriceHistory productId={1} />
      <PriceHistory productId={2} />
    </div>
  )
}
