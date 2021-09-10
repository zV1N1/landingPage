import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`

  * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
  }

  body {
    background: #f8f8f8;
    font-size: 2.4rem;
    font-family: 'Open Sans', sans-serif;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'Montserrat', sans-serif;
  }
`;
