import { Link } from 'react-router-dom';
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

export const HeaderLink = styled(Link)`
  ${() => css`
    color: inherit;

    &::after {
      content: '';
      display: block;
      height: 1px;
      background-color: #000;
      width: 0%;
      transform-origin: left;
      transition: 0.7s cubic-bezier(0.19, 1, 0.22, 1) 0.2s;
    }

    &:hover::after {
      width: 100%;
    }
  `}
`;
