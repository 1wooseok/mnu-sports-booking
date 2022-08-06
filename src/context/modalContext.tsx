import React, { createContext, useState, useContext, useCallback } from "react";

interface ProviderProps {
  children: React.ReactNode;
}

const initialModalState: boolean = false;
let initialModalAction: any = () => {};

const modalContext = createContext(initialModalState);
const modalActionContext = createContext(initialModalAction);

export function ModalContextProvider({ children }: ProviderProps) {
  const [state, setState] = useState<boolean>(false);
  const actions = useCallback(() => setState((prev) => !prev), []);

  return (
    <modalActionContext.Provider value={actions}>
      <modalContext.Provider value={state}>{children}</modalContext.Provider>
    </modalActionContext.Provider>
  );
}

export function useModal() {
  const modal = useContext(modalContext);

  if (modal === undefined) {
    throw new Error("useModal must be used within a LoginContextProvider");
  }

  return modal;
}

export function useSetModal() {
  const setModal = useContext(modalActionContext);

  if (setModal === undefined) {
    throw new Error("useSetModal must be used within a ModalContextProvider");
  }

  return setModal;
}
