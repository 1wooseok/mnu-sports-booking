import React from "react";
import styled from "styled-components";
import { useSetModal } from "../../../context/modalContext";
import { useLogin } from "../../../context/loginContext";
import { flexCenter } from "../../../style/LayoutStyle";

interface HeaderProps {
  children: React.ReactNode;
}

export default function Header({ children }: HeaderProps) {
  const setModal = useSetModal();
  const login = useLogin();

  return (
    <StHeader>
      {children}
      {!login && <LoginBtn onClick={setModal}>로그인</LoginBtn>}
    </StHeader>
  );
}

const StHeader = styled.header`
  position: relative;

  ${flexCenter}
  justify-content: space-between;

  text-align: center;

  width: 100vw;
  height: 60px;

  padding: 0px 18px;

  background: rgb(255, 255, 255);
  box-shadow: rgb(235 235 235) 0px -0.5px 0px 0px inset;

  h2 {
    width: 100%;
    font-size: 17px;
    font-weight: 500;
  }

  svg {
    width: 24px;
    height: 24px;
  }
`;

const LoginBtn = styled.button`
  ${flexCenter}
  position: absolute;
  right: 18px;

  border: 1px solid rgb(235, 235, 235);

  height: 44px;
  padding: 6px 20px;
`;
