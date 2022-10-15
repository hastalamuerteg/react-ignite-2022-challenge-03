import styled from 'styled-components'

export const Button = styled.button`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  font-size: ${(props) => props.theme.fontSizes.sm};
  font-weight: ${(props) => props.theme.fontWeights.bold};
  color: ${(props) => props.theme.colors.blue};
  text-transform: uppercase;
  line-height: 19px;

  border: 0;
  background: transparent;

  svg {
    width: 16px;
    height: 16px;
  }
`
