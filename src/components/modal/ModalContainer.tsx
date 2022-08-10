import React from "react";
import styled from "styled-components";
import { useModal, useSetModal } from "../../context/modalContext";
import { flexCenter } from "../../style/LayoutStyle";

export default function ModalContainer() {
  const modal = useModal();
  const setModal = useSetModal();

  if (!modal) return null;

  return (
    <>
      <ModalBg onClick={() => setModal(null)} />
      {modal}
    </>
  );
}

const ModalBg = styled.div`
  ${flexCenter}

  position: fixed;
  top: 0;
  left: 0;

  width: 100vw;
  height: 100vh;

  overflow: hidden;

  background-color: rgba(15, 15, 15, 0.75);

  transition: background-color 0.2s ease 0s;

  z-index: 10000;
`;
