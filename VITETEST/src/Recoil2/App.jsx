import { useRecoilState, useRecoilValue } from 'recoil'
import { chargeState } from './atoms'
import { usdSelector } from './selectors'

export default function App() {
  const [krw, setKrw] = useRecoilState(chargeState)
  const usd = useRecoilValue(usdSelector)

  return (
    <div>
      변환기
      <input
        value={krw}
        onChange={e => setKrw(e.target.value)}
      />
      <span>krw : {usd} USD</span>
    </div>
  )
}
