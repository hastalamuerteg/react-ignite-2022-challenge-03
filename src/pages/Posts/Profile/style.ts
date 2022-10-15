import { BaseCard } from '@/components/BaseCard'
import styled from 'styled-components'

export const ProfileCard = styled(BaseCard)`
  position: relative;
  margin-top: -80px;
  display: flex;
  align-items: center;
  gap: 2rem;
`

export const ProfileImage = styled.img`
  flex-shrink: 0;
  height: 148px;
  width: 148px;
  border-radius: 8px;
  object-fit: cover;

  @media only screen and (max-width: 700px) {
    display: none;
  }
`

export const ProfileContent = styled.div`
  strong {
    font-size: ${(props) => props.theme.fontSizes['2xl']};
    margin-bottom: 0.5rem;
    display: block;
  }

  p {
    margin-bottom: 1.5rem;
  }

  & > a {
    position: absolute;
    top: 32px;
    right: 32px;

    @media only screen and (max-width: 450px) {
      position: static;
      margin-bottom: 0.5rem;
    }
  }
`

export const ProfileContactInformation = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;

  @media only screen and (max-width: 500px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
  }
`

export const ProfileContact = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  svg {
    height: 18px;
    width: 18px;
    color: ${(props) => props.theme.colors.labelColor};
  }

  a {
    color: ${(props) => props.theme.colors.blue};
  }
`
