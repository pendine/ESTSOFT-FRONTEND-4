import styled from 'styled-components'
import './styles/common.scss'

const TestBlock = styled.div`
  // background: var(--primary-color);
  background: lightcoral;
`

export default function Test1() {
  return (
    <>
      <TestBlock>TestBlock 이건 div태그임</TestBlock>
    </>
  )
}
