import styled from 'styled-components'
import coverImg from '@/assets/cover.jpg'

export const HeaderContainer = styled.header`
  height: 296px;
  display: flex;
  align-items: flex-start;
  justify-content: center;

  background: url(${coverImg});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;

  & > img {
    margin-top: 4rem;
  }
`
