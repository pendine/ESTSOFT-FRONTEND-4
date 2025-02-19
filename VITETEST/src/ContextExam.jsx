import { createContext, useState } from 'react'
import A1 from './components/Compo1'
import A2 from './components/Compo2'

export const ColorContext = createContext('')

export default function ContextExam() {
  const [color] = useState('blue')

  return (
    <ColorContext.provider value={color}>
      <A1 />
      <A2 />
      <A2 color={color} />
    </ColorContext.provider>
  )
}
