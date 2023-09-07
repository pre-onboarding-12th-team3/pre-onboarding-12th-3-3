import { createGlobalStyle, css } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  :root{
    --Primary : #017be9;
    --DarkenPrimary : #07589e;
  }

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
    width: 100%;
    height: 100vh;
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
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
