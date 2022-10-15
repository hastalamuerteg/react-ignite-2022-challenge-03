import styled from 'styled-components'

export const BaseCard = styled.div`
  padding: 2rem;
  width: 100%;
  background: ${(props) => props.theme.colors.profileColor};
  box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
`
