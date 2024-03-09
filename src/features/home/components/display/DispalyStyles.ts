import styled from 'styled-components';
// import { media } from '../../styles/GlobalStyles';

interface IProps {
  password: string | null;
}

export const DisplayWrapper = styled.div`
  width: 100%;
  background-color: var(--color-dark-grey);
  padding: 1.9rem 3.2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 2.4rem;

  svg:hover {
    cursor: pointer;

    path {
      fill: #fff;
    }
  }


`;

export const Password = styled.h2<IProps>`
  font-size: var(--font-size-heading-l);
  line-height: var(--font-line-heading-l);
  color: var(--color-almost-white);
  opacity: ${(props) => (props.password ? '1' : '0.25')};


`;
