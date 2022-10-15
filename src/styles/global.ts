import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  *, *::after, *::before {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: ${(props) => props.theme.colors.background};
  }

  body, input {
    font-family: ${(props) => props.theme.fontFamily};
    font-size: ${(props) => props.theme.fontSizes.md};
    font-weight: ${(props) => props.theme.fontWeights.normal};
    color: ${(props) => props.theme.colors.baseText};
    line-height: 160%;
  }

  h1, h2, h3, strong {
    font-weight: ${(props) => props.theme.fontWeights.bold};
    color: ${(props) => props.theme.colors.title};
  }

  a {
    text-decoration: none;
    color: ${(props) => props.theme.colors.blue};
  }

  button {
    cursor: pointer;
  }
`
