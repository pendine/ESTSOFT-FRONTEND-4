import { ThemeContext } from './App.jsx'

function Header() {
  // TODO 3: Context 사용하여 테마 적용
  return (
    <header>
      <h1>테마 변경 앱 : {ThemeContext.themes}</h1>
    </header>
  )
}

export default Header
