import styled, { css } from 'styled-components';

export const SlideTitle = styled.h2`
  ${() => css`
    font: 700 2rem/1.33 'Roboto';
    text-transform: capitalize;
    margin: 1rem 0;
  `}
`;

export const SlidePrice = styled.span`
  ${() => css`
    font: 700 1.6rem/1.55 'Roboto';
    margin: 1rem 0;
  `}
`;

export const SlideText = styled.p`
  ${() => css`
    font: 400 1.8rem/1.5 'Roboto';
  `}
`;
