import React, {
  createContext,
  useState,
  useContext,
  useCallback,
  ReactNode,
} from "react";

interface ProviderProps {
  children: ReactNode;
}

const initialModalState: any = undefined;
let initialModalAction: any = undefined;

const modalContext = createContext(initialModalState);
const modalActionContext = createContext(initialModalAction);

export function ModalContextProvider({ children }: ProviderProps) {
  const [modal, setModal] = useState<ReactNode | null>(null);
  const actions = useCallback((curr: ReactNode) => setModal(curr), []);

  return (
    <modalActionContext.Provider value={actions}>
      <modalContext.Provider value={modal}>
        {children}
        {modal && modal}
      </modalContext.Provider>
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
