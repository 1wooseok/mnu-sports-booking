import React, { createContext, useState, useContext, useCallback } from "react";

interface ProviderProps {
  children: React.ReactNode;
}

const initialLoginState: boolean = false;
let initialLoginAction: any; // HACK

const loginContext = createContext(initialLoginState);
const loginActionContext = createContext(initialLoginAction);

export function LoginContextProvider({ children }: ProviderProps) {
  const [state, setState] = useState<boolean>(false);
  const actions = useCallback(() => setState((prev) => !prev), []);

  return (
    <loginActionContext.Provider value={actions}>
      <loginContext.Provider value={state}>{children}</loginContext.Provider>
    </loginActionContext.Provider>
  );
}

export function useLogin() {
  const login = useContext(loginContext);

  if (login === undefined) {
    throw new Error("useLoginState must be used within a LoginContextProvider");
  }

  return login;
}

export function useSetLogin() {
  const setLogin = useContext(loginActionContext);

  if (setLogin === undefined) {
    throw new Error("useLoginState must be used within a LoginContextProvider");
  }

  return setLogin;
}
