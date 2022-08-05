import { createGlobalStyle } from "styled-components";
import { flexCenter } from "./LayoutStyle";

const GlobalStyle = createGlobalStyle`
  * { box-sizing: border-box; }
  
  html, body, p { margin: 0; }

  html { hegiht: 100vh; overflow: hidden; }

  body { background-color: rgb(245, 246, 247);  }

  ul, li {  margin: 0; list-style: none; padding: 0; }

  a { color: black; cursor: pointer; text-decoration: none;}

  div { border-radius: 2px; }
  
  button { border-radius: 2px; cursor: pointer; }

  input:focus, select:focus, textarea:focus { outline-color: mediumseagreen; }
`;

export default GlobalStyle;
