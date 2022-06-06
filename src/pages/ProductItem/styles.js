import styled, { css } from 'styled-components';

export const Container = styled.article`
  ${() => css`
    display: grid;
    grid-template-columns: 1fr 38rem;
    gap: 2rem;

    img {
      height: 100%;
      object-fit: cover;
    }
  `}
`;
