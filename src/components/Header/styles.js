import styled, { css } from 'styled-components';

export const HeaderBackground = styled.header`
  ${() => css`
    background-color: #f5f5f5;
    border-bottom: 1px solid;
  `}
`;

export const HeaderContainer = styled.div`
  ${() => css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1200px;
    margin: 0 auto;
    padding: 1.6rem;
  `}
`;

export const HeaderLinks = styled.ul`
  ${() => css`
    display: flex;
    gap: 3rem;
    font-family: 'Roboto', sans-serif;
    font-size: 2rem;
    font-weight: 400;
  `}
`;
