import styled from 'styled-components';

// import { media } from '../../styles/GlobalStyles';

interface IProps {
  color: string;
  isFilled: boolean;
}

export const StrengthMeterWraper = styled.div`
  background-color: var(--color-very-dark-grey);
  margin-top: 1rem;
  padding: 2.2rem 3rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  p {
    text-transform: uppercase;
    color: var(--color-grey);
  }

  
`;

export const Meter = styled.div`
  display: flex;
  align-items: center;
  gap: 1.6rem;
  h4 {
    text-transform: uppercase;
    color: var(--color-almost-whire);
    font-size: var(--font-size-heading-m);
    line-height: var(--font-line-heading-m);

  
  }
`;

export const Levels = styled.div`
  display: flex;
  gap: 0.9rem;
`;

export const LevelBar = styled.span<IProps>`
  width: 1rem;
  height: 2.8rem;
  border: 2px solid
    ${({ isFilled, color }) =>
      isFilled ? `var(--color-${color})` : 'var(--color-almost-white)'};
  background-color: ${({ isFilled, color }) =>
    isFilled ? `var(--color-${color})` : 'var(--color-very-dark-grey)'}; ;
`;
