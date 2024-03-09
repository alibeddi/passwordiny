import styled from 'styled-components';



export const Button = styled.button`
  width: 100%;
  outline: none;
  background-color: var(--color-neon-green);
  color: var(--color-dark-grey);
  height: 6.5rem;
  border: 2px solid var(--color-neon-green);
  cursor: pointer;
  text-transform: uppercase;
  font-family: inherit;
  font-size: inherit;
  margin-top: 3.2rem;
  transition: transform 0.3s ease-in;
  font-weight: bold;

  svg {
    margin-left: 2.4rem;
  }

  &:hover {
    background-color: var(--color-dark-grey);
    color: var(--color-neon-green);

    svg {
      path {
        fill: var(--color-neon-green);
      }
    }
  }
  &:active {
    transform: scale(0.98);
  }

  &:disabled {
    transform: scale(1);
    background-color: var(--color-neon-green);
    color: var(--color-dark-grey);
    cursor: not-allowed;

    svg {
      path {
        fill: var(--color-dark-grey);
      }
    }
  }


`;
