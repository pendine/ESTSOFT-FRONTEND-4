import { useState } from 'react'

const useLocalStorage = (key, val) => {
  // 이 상태값을 관리하기위해서
  // 메서드별로 관리를 할 수 도 있지만
  // 버튼을 누를때마다 State 내부에서 처리하는 방법
  const [storedValue, setStoreValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key)
      return item ? JSON.parse(item) : val
    } catch (error) {
      return val
    }
  })

  // 이렇게하면 하면 아래는 동작 안함
  // const setValue = value => {
  //   setStoredValue(value)
  //   window.localStorage.setItem(key, JSON.stringify(value))
  // }

  // 아래의 리턴까지 작성해줘야 동작함
  const setValue = value => {
    setStoreValue(value)
    window.localStorage.setItem(key, JSON.stringify(value))
  }

  return [storedValue, setValue]
}

export default function ThemeToggle() {
  const [isDarkMode, setIsDarkMode] = useLocalStorage('darkMode', false)

  return (
    <button onClick={() => setIsDarkMode(!isDarkMode)}>
      {isDarkMode ? '다크모드' : '라이트모드'}
    </button>
  )
}
