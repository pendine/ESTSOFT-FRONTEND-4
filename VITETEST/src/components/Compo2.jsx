import { useContext } from 'react'
import { ColorContext } from '../ContextExam'

export default function A2() {
  const color = useContext(ColorContext)
  return <div style={{ color }}>A2</div>
}
