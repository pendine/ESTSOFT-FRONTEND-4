import styled from 'styled-components'

export const SizeSelectorWrapper = styled.div`
  display:flex;
  gap:${({ theme }) => theme.spacing.md}
  margin:${({ theme }) => theme.spacing.md}
`

export const SizeButton = styled.button`
  width: 40px;
  height: 40px;
  border: 2px solid ${({ theme }) => theme.colors.primary};
  background: ${({ selected, theme }) =>
    selected ? theme.colors.primary : 'transparent'};
  color: ${({ selected, theme }) =>
    selected ? 'white' : theme.colors.primary};

  &:hover {
    transform: translateY(-5px);
  }
`
