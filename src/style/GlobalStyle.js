import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * { box-sizing: border-box; -ms-overflow-style: none; }
 
::-webkit-scrollbar { display: none; }

  html, body, p { margin: 0; }

  html { hegiht: 100vh; overflow: hidden; }

  body { background-color: rgb(245, 246, 247);  }

  ul, li {  margin: 0; list-style: none; padding: 0; }

  a { color: black; cursor: pointer; text-decoration: none;}

  div, img { border-radius: 2px; }
  
  button { border-radius: 2px; cursor: pointer; background-color: rgb(255, 255, 255);}

  input:focus, select:focus, textarea:focus { outline-color: mediumseagreen; }
`;

export default GlobalStyle;
