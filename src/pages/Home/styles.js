import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';

export const Main = styled.main`
  ${() => css`
    max-width: 1200px;
    margin: 0 auto;
    padding: 6rem 1.6rem;
    display: grid;
    grid-template-columns: 2fr 38rem;
    gap: 2rem;

    img {
      height: 100%;
      object-fit: cover;
    }

    @media (max-width: 800px) {
      & {
        grid-template-columns: 1fr;
        padding: 3rem 1.6rem;
      }
    }
  `}
`;

export const MainContent = styled.div`
  ${() => css`
    display: grid;
    align-content: center;
    justify-items: start;
    gap: 3rem;

    @media (max-width: 800px) {
      & {
        gap: 1.5rem;
      }
    }
  `}
`;

export const MainTitle = styled.h1`
  ${() => css`
    font: 600 6.4rem/1 'Montserrat';

    @media (max-width: 800px) {
      & {
        font: 600 3.8rem/1.1 'Montserrat';
      }
    }
  `}
`;

export const MainText = styled.p`
  ${() => css`
    font: 400 2.4rem/1.41 'Roboto';

    @media (max-width: 800px) {
      & {
        font: 400 1.6rem/1.5 'Roboto';
      }
    }
  `}
`;

export const MainButton = styled(Link)`
  ${() => css`
    font: 500 2rem/1.35 'Roboto';
    text-transform: uppercase;
    display: inline-block;
    color: #f5f5f5;
    padding: 1.2rem 2.4rem;
    border: none;
    outline: none;
    border-radius: 4px;
    background: linear-gradient(#232323, #080808);

    &:hover {
      background: linear-gradient(#141414, #000);
      color: #ccc;
    }

    @media (max-width: 800px) {
      & {
        font: 500 1.4rem/1.35 'Roboto';
        padding: 0.8rem 1.6rem;
      }
    }
  `}
`;
