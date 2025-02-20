import { useState } from 'react'

function useInput(initialValue = '') {
  const [value, setValue] = useState(initialValue)

  const handleChange = e => {
    setValue(e.target.value)
  }

  return {
    value,
    onChange: handleChange
  }
}

export default function LoginForm() {
  // 랜더링을 구현한 코드를 보고
  // 아이디와 비밀번호를 입력하면
  // 내용을 전송하는등 이벤트를 관리하는
  // 커스텀훅 useInput을 만들기

  const username = useInput('')
  const password = useInput('')

  const handleSubmit = e => {
    e.preventDefault()
    console.log('아이디:', username.value)
    console.log('비밀번호:', password.value)
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="아이디"
        {...username}
      />
      <input
        type="password"
        placeholder="비밀번호"
        {...password}
      />
      <button type="submit">로그인</button>
    </form>
  )
}
