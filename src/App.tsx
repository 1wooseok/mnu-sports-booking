import React from "react";
import Router from "./router/Router";
import GlobalStyle from "./style/GlobalStyle";
import { FetchContextProvider } from "./context/fetchContext";
import { ModalContextProvider } from "./context/modalContext";
import { LoginContextProvider } from "./context/loginContext";

export default function App() {
  return (
    <>
      <GlobalStyle />
      <ModalContextProvider>
        <LoginContextProvider>
          <FetchContextProvider>
            <Router />
          </FetchContextProvider>
        </LoginContextProvider>
      </ModalContextProvider>
    </>
  );
}
