import { createGlobalStyle, css } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  a{
    text-decoration: none;
    color: inherit;
    }
  *{
    box-sizing: border-box;
  }
  html, body, div, span, h1, h2, h3, h4, h5, h6, p, 
  a, dl, dt, dd, ol, ul, li, form, label, table{
    margin: 0;
    padding: 0;
    border: 0;
  }
  body{
    line-height: 1;
    font-family: "Pretendard Variable",'Noto Sans KR', sans-serif;
    background-color:#CAE9FF;
  }
  ol, ul{
    list-style: none;
  }
  button {
    border: 0;
    background: transparent;
    cursor: pointer;
  }
  input{
    border: 0;
    outline: none;
  }
  #root{

  }
`;

export const a11yHidden = css`
  overflow: hidden;
  position: absolute !important;
  clip: rect(0, 0, 0, 0);
  clip-path: inset(50%);
  width: 1px;
  height: 1px;
  margin: -1px;
`;

export default GlobalStyles;
