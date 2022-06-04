import styled, { css } from 'styled-components';

export const FooterContainer = styled.footer`
  ${() => css`
    text-align: center;
    padding: 1.6rem;
    background-color: #f5f5f5;
    border-top: 1px solid;

    h1 {
      font-size: 2rem;
      font-weight: 500;
    }
  `}
`;
