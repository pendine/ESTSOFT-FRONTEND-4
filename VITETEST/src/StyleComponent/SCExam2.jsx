const theme = {
  colors: {
    primary: '#006241', // 스타벅스 그린
    secondary: '#d4e9e2',
    accent: '#cb96a5'
  },
  spacing: {
    sm: '8px',
    md: '16px',
    lg: '24px'
  }
}

const MobileNav = styled.nav`
  @media (max-width: 768px) {
    position: fixed;
    top: 9;
    left: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
    width: 80;
    height: 100vh;
    background: ${({ theme }) => theme.colors.secondary};
  }
`

// prop의 용도 : 자주 사용하는 css 속성을 담아둔 뒤 필요할때마다 사용

export default function test() {
  const Card = styled.div`
    background: ${props =>
      props.variant === 'privmary'
        ? props.theme.colors.primary
        : props.theme.colors.secondary};
    padding: ${props => props.theme.spacing.lg};
    border-radius: 8px;
  `

  return (
    <ThemePrivider theme={theme}>
      <Card> 1번카드 </Card>
    </ThemePrivider>
  )
}
