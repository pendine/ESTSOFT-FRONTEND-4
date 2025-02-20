import { useContext } from 'react'
import { ThemeContext } from './App.jsx'

function Content() {
  // TODO 4: Context 사용하여 테마 적용
  const themes = useContext(ThemeContext)

  return (
    <main>
      <p>현재 테마: {themes.themes}</p>
      {/* TODO: 테마 변경 버튼 구현 */}
    </main>
  )
}
