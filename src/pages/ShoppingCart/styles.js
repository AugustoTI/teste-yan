import styled, { css } from 'styled-components';

export const Container = styled.section`
  ${() => css`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;

    img {
      width: 200px;
      height: 200px;
    }

    @media (max-width: 550px) {
      grid-template-columns: 1fr;
    }
  `}
`;

export const ListContainer = styled.div`
  ${() => css`
    max-height: 400px;
    overflow-y: auto;
  `}
`;

export const TitlePage = styled.h1`
  ${() => css`
    text-transform: uppercase;
    font: 700 4rem/1.15 'Montserrat';
    margin-bottom: 3rem;
  `}
`;

export const Button = styled.button`
  ${() => css`
    padding: 0.6rem 1.2rem;
  `}
`;
