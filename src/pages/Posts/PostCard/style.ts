import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const CardLink = styled(Link)`
  &:hover > div {
    border-color: ${(props) => props.theme.colors.labelColor};
  }
`

export const Card = styled.div`
  padding: 2rem;
  background: ${(props) => props.theme.colors.postColor};
  border-radius: 10px;
  border: 2px solid transparent;
  width: 416px;
  height: 260px;

  header {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    h3 {
      font-size: ${(props) => props.theme.fontSizes.xl};
    }

    time {
      font-size: ${(props) => props.theme.fontSizes.sm};
      color: ${(props) => props.theme.colors.spanColor};
    }
  }

  p {
    margin-top: 1.25rem;
    color: ${(props) => props.theme.colors.baseText};
  }
`
