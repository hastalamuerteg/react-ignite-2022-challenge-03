import styled from 'styled-components'

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 4.5rem 0 0.75rem;

  strong {
    font-size: ${(props) => props.theme.fontSizes.lg};
    color: ${(props) => props.theme.colors.subtitle};
  }

  span {
    font-size: ${(props) => props.theme.fontSizes.sm};
  }
`

export const Form = styled.form`
  input {
    background-color: ${(props) => props.theme.colors.baseInput};
    border: 1px solid ${(props) => props.theme.colors.borderColor};

    outline: 0;
    width: 100%;
    padding: 0.75rem 1rem;
    border-radius: 6px;

    &::placeholder {
      color: ${(props) => props.theme.colors.labelColor};
    }

    &:focus {
      border-color: ${(props) => props.theme.colors.blue};
    }
  }
`

export const Grid = styled.div`
  margin: 3rem 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;

  @media only screen and (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`
