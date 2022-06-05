import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';

export const HeaderBg = styled.header`
  ${() => css`
    background-color: #dedede;
    border-bottom: 1px solid;
  `}
`;

export const HeaderContainer = styled.div`
  ${() => css`
    max-width: 1200px;
    margin: 0 auto;
    padding: 2rem 1.6rem;
    display: flex;
    justify-content: space-between;
    align-items: center;

    nav {
      position: relative;
    }

    ul {
      display: flex;
      gap: 3rem;
      font-family: 'Roboto', sans-serif;
      font-size: 2rem;
      font-weight: 400;

      &.hidden {
        display: none;
      }

      &.show {
        display: grid;
        padding: 1.2rem;
        gap: 1.5rem;
        position: absolute;
        background-color: #e5e5e5;
        top: 4.5rem;
        right: 0;
        border-radius: 4px;
        border: 1px solid;
      }
    }
  `}
`;

export const HeaderLink = styled(Link)`
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
`;
