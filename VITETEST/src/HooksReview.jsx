import React, {
  memo,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState
} from 'react'

// export default function App() {
//   const inputRef = useRef(null)

//   // input 요소에 포커스!
//   // Error - cannot read properties of null (reading 'focus')
//   useEffect(() => {
//     inputRef.current.focus()
//   }, [])

//   return (
//     <>
//       <input
//         type="text"
//         ref={inputRef}
//       />
//     </>
//   )
// }

// useContext
// const ThemeContext = React.createContext('light')
// export default function Test1() {
//   // useContext를 통해 특정한 컨텍스트의 값을 갖고옴
//   const theme = useContext(ThemeContext)

//   return (
//     <>
//       <button theme={theme}>뭘 하는거지</button>
//     </>
//   )
// }

// useRef와 useState의 차이점
// 리렌더링이 되는지 안되는지
// export default function UseRefExam() {
//   const inputEl = useRef(null)
//   const onButtonClick = () => {
//     // 'current'는 마운트된 텍스트 입력 요소를 가리킵니다.
//     inputEl.current.focus()
//   }

//   return (
//     <>
//       <input
//         ref={inputEl}
//         type="text"
//       />
//       <button onClick={onButtonClick}>Focus the input</button>
//     </>
//   )
// }

function ExampleComponent() {
  const [counter, setCounter] = useState(0)

  const incrementCounter = () => {
    setCounter(prevCounter => prevCounter + 1)
  }

  useEffect(() => {
    console.log('Component re-rendered')
  }, [counter])

  // console.log('Component re-rendered')

  return (
    <div>
      <button onClick={incrementCounter}>Increment</button>
      <p>Counter: {counter}</p>
    </div>
  )

  // 특정 값이 변경될때만 내부의 콜백함수를 실행하도록 처리
  // const memoizedContent = useMemo(() => {
  //   console.log('Component re-rendered')
  //   return (
  //     <div>
  //       <button onClick={incrementCounter}>Increment</button>
  //       <p>Counter: {counter}</p>
  //     </div>
  //   )
  // }, [counter])

  // return memoizedContent
}

// 이전 상태를 프로퍼티로 전달하며 다음 상태를 프로퍼티로 전달함
// export default memo(ExampleComponent, (prevProps, nextProps) => {
//   return prevProps.counter === nextProps.counter
// })

export default ExampleComponent
