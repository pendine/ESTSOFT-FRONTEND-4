// 특정상황에서만 실행되어야하는 컴포넌트
//  게임이 끝났을때 렌더링되어야하는 컴포넌트.
const GameOverScreen = ({ score }) => {
  const overlayStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white',
    fontSize: '24px'
  }

  return (
    <div style={overlayStyle}>
      <h2>Game Over!</h2>
      <p>Final Score: {score}</p>
      <button
        onClick={() => window.location.reload()}
        style={{
          padding: '10px 20px',
          fontSize: '18px',
          cursor: 'pointer'
        }}>
        Play Again
      </button>
    </div>
  )
}

export default GameOverScreen
