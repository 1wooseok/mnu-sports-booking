import React, { useState, useCallback } from "react";
import styled from "styled-components";

type Props = {
  children: React.ReactElement;
};

export default function ModalContainer({ children }: Props) {
  const [open, setOpen] = useState<boolean>(true);

  const openModal = useCallback(() => setOpen((prev) => !prev), [setOpen]);

  if (!open) return null;

  return (
    <>
      <ModalBg onClick={openModal} />
      {children}
    </>
  );
}

const ModalBg = styled.div`
  position: fixed;
  top: 0;
  left: 0;

  width: 100vw;
  height: 100vh;

  overflow: hidden;

  background-color: rgba(15, 15, 15, 0.75);

  transition: background-color 0.2s ease 0s;

  display: flex;
  align-items: center;
  justify-content: center;

  z-index: 10000;
`;
