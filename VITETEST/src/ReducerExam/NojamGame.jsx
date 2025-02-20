import { memo, useCallback, useEffect, useReducer } from 'react'
import GameBoard from './GameBoard.jsx'
import GameOverScreen from './GameOverScreen.jsx'

// 게임 요약
// 결론 : 상태값을 하나 선언해두고 reducer를 통해
//        리렌더링시 지속적으로 상태값을 감시하여 해당 조건의 발동마다
//        dispatch를 활용해 지속적으로 리렌더링의 상태를 관리.

// 핵심은 reducer를 통해 리렌더링 상태관리나 추후 확장도 매우 편하게진행.

const gameReducer = (state, action) => {
  switch (action.type) {
    case 'MOVE':
      return {
        ...state,
        position: {
          x: state.position.x + action.x,
          y: state.position.y + action.y
        }
      }
    case 'COLLECT_ITEM':
      return {
        ...state,
        score: state.score + action.points,
        items: state.items.filter(item => item.id !== action.itemId)
      }
    case 'GAME_OVER':
      return {
        ...state,
        isGameOver: true,
        finalScore: state.score
      }
    default:
      return state
  }
}

export default function NojamGame() {
  // reducer hook을 확인하면 기능들을 어디선가 구현해뒀다는 얘기.
  const [gameState, dispatch] = useReducer(gameReducer, {
    position: { x: 0, y: 0 },
    score: 0,
    items: [
      { id: 1, x: 3, y: 3, points: 10 },
      { id: 2, x: 5, y: 2, points: 20 },
      { id: 3, x: 2, y: 6, points: 30 }
    ],
    isGameOver: false,
    finalScore: 0
  })

  // 게임의 상태 자체를 전달해줄 필요가 있음.
  const handleKeyPress = useCallback(
    e => {
      if (gameState.isGameOver) return
      //e.key를 통해 해당 이벤트의 DOM property를 추적하는것도 가능.
      switch (e.key) {
        case 'ArrowUp':
          console.log(e.key)
          dispatch({ type: 'MOVE', x: 0, y: -1 })
          break
        case 'ArrowDown':
          console.log(e.key)
          dispatch({ type: 'MOVE', x: 0, y: 1 })
          break
        case 'ArrowLeft':
          console.log(e.key)
          dispatch({ type: 'MOVE', x: -1, y: 0 })
          break
        case 'ArrowRight':
          console.log(e.key)
          dispatch({ type: 'MOVE', x: 1, y: 0 })
          break
        default:
          break
        // 다른 키 처리
      }
    },
    [gameState, gameState.isGameOver]
  )

  // 아이템 충돌 감지
  useEffect(() => {
    const collectItem = () => {
      gameState.items.forEach(item => {
        if (
          item.x === gameState.position.x &&
          item.y === gameState.position.y
        ) {
          dispatch({
            type: 'COLLECT_ITEM',
            itemId: item.id,
            points: item.points
          })
        }
      })
    }

    collectItem()

    // 모든 아이템을 수집하면 게임 오버
    if (gameState.items.length === 0) {
      dispatch({ type: 'GAME_OVER' })
    }
  }, [gameState.position, gameState.items])

  useEffect(() => {
    window.addEventListener('keydown', handleKeyPress)
    return () => window.removeEventListener('keydown', handleKeyPress)
  }, [handleKeyPress])

  //게임을 플레이 하기위해 키보드로 조정.
  return (
    <div>
      <div>Score: {gameState.score}</div>
      <GameBoard
        position={gameState.position}
        items={gameState.items}
      />
      {gameState.isGameOver && <GameOverScreen score={gameState.finalScore} />}
    </div>
  )
}
