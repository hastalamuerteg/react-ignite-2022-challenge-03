import styled from 'styled-components'

export const Link = styled.a`
  display: inline-flex;
  flex-wrap: wrap;
  font-size: ${(props) => props.theme.fontSizes.sm};
  font-weight: ${(props) => props.theme.fontWeights.bold};
  text-transform: uppercase;
  line-height: 19px;
  text-decoration: none;

  &::after {
    content: '';
    margin-top: 4px;
    height: 1px;
    width: 100%;
    background-color: ${(props) => props.theme.colors.blue};
    transform: scale(0);
    transform-origin: left;
    transition: transform 0.2s;
  }

  &:hover::after {
    transform: scale(1);
  }

  svg {
    width: 16px;
    height: 16px;
    margin-left: 0.5rem;
  }
`
