import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

const GlobalStyles = createGlobalStyle`
  ${normalize};

  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  html {
    scroll-behavior: smooth;
    scroll-padding-top: 88px;
  }
  body {
    font-family: ${(props) => props.theme.fonts.main};
    font-size: 16px;
    line-height: 1.6;
    background: ${(props) => props.theme.colors.background};
    color: ${(props) => props.theme.colors.text};
    -webkit-font-smoothing: antialiased;
    overflow-x: hidden;
  }
  h1, h2, h3, h4 {
    font-family: ${(props) => props.theme.fonts.title};
    line-height: 1.1;
    letter-spacing: -0.02em;
  }
  a {
    color: inherit;
    text-decoration: none;
  }
  ul {
    list-style: none;
  }
  img {
    display: block;
    max-width: 100%;
  }
  ::selection {
    background: ${(props) => props.theme.colors.accent};
    color: #fff;
  }
  :focus-visible {
    outline: 2px solid ${(props) => props.theme.colors.accent2};
    outline-offset: 3px;
    border-radius: 6px;
  }

  @media (prefers-reduced-motion: reduce) {
    html { scroll-behavior: auto; }
    *, *::before, *::after {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
    }
  }
`;

export default GlobalStyles;
