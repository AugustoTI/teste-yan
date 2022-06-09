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

    p {
      margin-bottom: 2rem;
    }

    @media (max-width: 800px) {
      grid-template-columns: 1fr;
    }
  `}
`;

export const Button = styled.button`
  ${() => css`
    padding: 0.6rem 1.2rem;
  `}
`;
