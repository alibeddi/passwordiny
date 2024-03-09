import styled from 'styled-components';

import { media } from '../../styles/GlobalStyles';

export const Options = styled.div`
  width: 100%;
  padding: 3.2rem;
  background-color: var(--color-dark-grey);

  ${media} {
    padding: 2rem 1.6rem 1.6rem 1.6rem;
  }
`;
