import { BaseCard } from '@/components/BaseCard'
import styled from 'styled-components'

export const PostHeaderContainer = styled(BaseCard)`
  margin-top: -80px;

  h1 {
    font-size: ${(props) => props.theme.fontSizes['2xl']};
    line-height: 130%;
    margin-bottom: 0.5rem;
  }
`

export const PostHeaderActions = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin-bottom: 1.25rem;
`

export const PostInformation = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;

  @media only screen and (max-width: 500px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
  }
`

export const PostInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  svg {
    height: 18px;
    width: 18px;
    color: ${(props) => props.theme.colors.labelColor};
  }

  span {
    color: ${(props) => props.theme.colors.subtitle};
  }
`
