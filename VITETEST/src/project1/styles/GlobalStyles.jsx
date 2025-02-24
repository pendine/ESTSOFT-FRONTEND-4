import { createGlobalStyle } from 'styled-components'
import theme from './theme.jsx'

export const GlobalStyles = createGlobalStyle`
  *{
    box-sizing:border-box;
    margin:0;
    padding:0;
  }

  body{
    font-family : sans-serif;
    line-height : 1.6;
    background : ${({ theme }) => theme.colors.secondary};
  }
`
