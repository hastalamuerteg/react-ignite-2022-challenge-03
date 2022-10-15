import { ThemeProvider } from 'styled-components'
import { BrowserRouter } from 'react-router-dom'
import { Header } from '@/components/Header'
import { AppRoutes } from '@/router'
import { GlobalStyle } from '@/styles/global'
import { theme } from '@/styles/theme'

export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header />
        <AppRoutes />
        <GlobalStyle />
      </BrowserRouter>
    </ThemeProvider>
  )
}
