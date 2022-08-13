import React from "react";
import Router from "./router/Router";
import GlobalStyle from "./style/GlobalStyle";
import { RecoilRoot } from "recoil";
import ErrorBoundary from "./components/suspense/ErrorBoundary";
import { FetchContextProvider } from "./context/fetchContext";
import { ModalContextProvider } from "./context/modalContext";
import { LoginContextProvider } from "./context/loginContext";

export default function App() {
  return (
    <>
      <GlobalStyle />
      <RecoilRoot>
        <ModalContextProvider>
          <LoginContextProvider>
            <FetchContextProvider>
              <ErrorBoundary>
                <Router />
              </ErrorBoundary>
            </FetchContextProvider>
          </LoginContextProvider>
        </ModalContextProvider>
      </RecoilRoot>
    </>
  );
}
