import { CounterProvider, useCounter } from './AppContext'

function CounterDisplay() {
  const { count } = useCounter()
  return <div>Current Count: {count}</div>
}

function CounterControls() {
  const { increment, decrement } = useCounter()
  return (
    <div>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </div>
  )
}

export default function App() {
  return (
    <CounterProvider>
      <div style={{ padding: '20px' }}>
        <h1>Context API Counter</h1>
        <CounterDisplay />
        <CounterControls />
      </div>
    </CounterProvider>
  )
}
