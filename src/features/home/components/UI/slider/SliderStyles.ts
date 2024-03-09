import styled from 'styled-components';

// import { media } from '../../../styles/GlobalStyles';
interface IProps {
  max: string;
  value: number;
}

export const SliderWrapper = styled.div`
  margin-bottom: 3.2rem;
`;

export const SliderContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1.6rem;

  span {
    color: var(----color-almost-white);
  }

  h3 {
    font-size: var(--font-size-heading-l);
    line-height: var(--font-line-heading-l);
    color: var(--color-neon-green);

  
  }
`;

export const SliderComponent = styled.input<IProps>`
  appearance: none;

  width: 100%;
  margin: 0;
  height: 0.8rem;
  cursor: pointer;

  &:focus {
    outline: none;
  }

  &::-webkit-slider-runnable-track {
    width: 100%;
    height: 0.8rem;
    background: linear-gradient(
      to right,
      var(--color-neon-green) 0%,
      var(--color-neon-green)
        ${(props) => (props.value / +props.max) * 100 + '%'},
      var(--color-very-dark-grey)
        ${(props) => (props.value / +props.max) * 100 + '%'},
      var(--color-very-dark-grey) 100%
    );
  }

  &::-webkit-progress-value {
    background-color: red;
  }

  &::-webkit-slider-thumb {
    position: relative;
    appearance: none;
    height: 2.8rem;
    width: 2.8rem;
    background-color: var(--color-almost-white);
    border-radius: 100%;
    border: solid 2px var(--color-almost-white);
    top: 50%;
    transform: translateY(-50%);
  }

  &::-moz-range-track,
  &::-moz-range-progress {
    width: 100%;
    height: 0.8rem;
    background-color: red;
  }

  &::-moz-range-progress {
    background-color: var(--color-neon-green);
  }

  &::-moz-range-thumb {
    appearance: none;
    margin: 0;
    height: 2.8rem;
    width: 2.8rem;
    background-color: var(--color-almost-white);
    border-radius: 100%;
    border: solid 2px var(--color-almost-white);
    top: 50%;
    transform: translateY(-50%);
  }

  &::-ms-track {
    width: 100%;
    height: 0.8rem;
    border: 0;
    /* color needed to hide track marks */
    color: transparent;
    background: transparent;
  }

  &::-ms-fill-lower {
    background-color: var(--color-neon-green);
  }

  &::-ms-fill-upper {
    background-color: var(--color-neon-green);
  }

  &:hover {
    &::-webkit-slider-thumb {
      background-color: var(--color-very-dark-grey);
      border: solid 2px var(--color-neon-green);
    }
  }
`;
