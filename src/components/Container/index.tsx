import { MainContainer } from './style'

interface IContainerProps {
  children: React.ReactNode
}

export const Container = ({ children }: IContainerProps) => {
  return <MainContainer>{children}</MainContainer>
}
