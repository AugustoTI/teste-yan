import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: 0;
  }

  a {
    text-decoration: none;
  }

  ul {
    list-style: none;
  }

  html {
    font-size: 62.5%;
  }

  body {
    font-size: 1.6rem;
  }

  img {
    display: block;
    max-width: 100%;
  }
`;
