import { useReducer } from 'react'

// 문제 공간
function QuestionComponent() {
  // 여기에 Redux hooks 사용
  const [state, dispatch] = useReducer(handleAnswer, {
    currentQuestionIndex : 0,
    questions : [],
    answers : [],
    score :0,
    
  })

  const  dispatch(index)
  const handleAnswer = selectedIndex => {
    // 액션 디스패치

    
  }

  return (
    <div>
      <h2>{currentQuestion.text}</h2>
      {currentQuestion.options.map((option, index) => (
        <button
          key={index}
          onClick={() => handleAnswer(index)}>
          {option}
        </button>
      ))}
      <button onClick={handleNext}>다음 질문</button>
    </div>
  )
}
