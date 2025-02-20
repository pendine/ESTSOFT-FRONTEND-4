import { memo } from 'react'

// 현 게임 판을 view를 위해 준비한 컴포넌트
const GameBoard = memo(({ position, items }) => {
  const boardStyle = {
    position: 'relative',
    width: '400px',
    height: '400px',
    border: '2px solid black',
    margin: '20px auto'
  }

  const playerStyle = {
    position: 'absolute',
    left: `${position.x * 40}px`,
    top: `${position.y * 40}px`,
    width: '40px',
    height: '40px',
    backgroundColor: 'blue',
    borderRadius: '50%',
    transition: 'all 0.3s'
  }

  const itemStyle = {
    position: 'absolute',
    width: '20px',
    height: '20px',
    backgroundColor: 'gold',
    borderRadius: '50%'
  }

  return (
    <div style={boardStyle}>
      <div style={playerStyle} />
      {items.map(item => (
        <div
          key={item.id}
          style={{
            ...itemStyle,
            left: `${item.x * 40}px`,
            top: `${item.y * 40}px`
          }}
        />
      ))}
    </div>
  )
})

export default GameBoard
