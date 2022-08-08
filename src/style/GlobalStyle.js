import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

  * { box-sizing: border-box; -ms-overflow-style: none; font-family: 'Noto Sans KR', sans-serif; }

  html, body, p { margin: 0; }

  html { hegiht: 100vh; overflow: hidden; }

  body { background-color: rgb(245, 246, 247);  }

  ol, ul, li {  margin: 0; list-style: none; padding: 0; }

  a { color: black; cursor: pointer; text-decoration: none;}

  div, img { border-radius: 2px; }
  
  button { outline:none; border: none; padding: 0; border-radius: 2px; cursor: pointer; background-color: rgb(255, 255, 255);}

  input, textarea { outline: none; border: none;  resize: none;}

  input:focus, select:focus, textarea:focus { outline-color: mediumseagreen; }

  ::-webkit-scrollbar { display: none; }
`;

export default GlobalStyle;
