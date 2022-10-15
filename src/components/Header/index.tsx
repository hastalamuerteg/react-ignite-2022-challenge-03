import { HeaderContainer } from './style'
import logoImg from '@/assets/logo.svg'

export const Header = () => {
  return (
    <HeaderContainer>
      <img src={logoImg} />
    </HeaderContainer>
  )
}
