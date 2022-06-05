import styled, { css } from 'styled-components';

export const ProductsTitle = styled.h1`
  ${() => css`
    text-transform: uppercase;
    font: 700 4rem/1.15 'Montserrat';
    margin-bottom: 3rem;
  `}
`;

export const ProductTitle = styled.h2`
  ${() => css`
    font: 700 2rem/1.33 'Roboto';
    text-transform: capitalize;
    margin: 1rem 0;
  `}
`;

export const ProductPrice = styled.span`
  ${() => css`
    font: 700 1.6rem/1.55 'Roboto';
    margin: 1rem 0;
  `}
`;

export const ProductText = styled.p`
  ${() => css`
    font: 400 1.8rem/1.5 'Roboto';
  `}
`;
