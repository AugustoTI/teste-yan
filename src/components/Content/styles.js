import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${() => css`
    max-width: 1200px;
    margin: 0 auto;
    padding: 6rem 1.6rem;

    @media (max-width: 800px) {
      & {
        padding: 3rem 1.6rem;
      }
    }
  `}
`;
