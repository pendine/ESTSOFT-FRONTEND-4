import { selector } from 'recoil'
import { chargeState } from './atoms'

export const usdSelector = selector({
  key: 'usdSelector',
  get: ({ get }) => {
    const krw = get(chargeState)
    const exchange = 1420
    return (krw / exchange).toFixed(2)
  }
})
