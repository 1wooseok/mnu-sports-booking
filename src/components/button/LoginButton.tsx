import React from "react";
import styled from "styled-components";
import { useLogin } from "../../context/loginContext";
import { useSetModal } from "../../context/modalContext";
import { flexCenter } from "../../style/LayoutStyle";
import LoginModal from "../modal/LoginModal";

export default function LoginButton() {
  const login = useLogin();
  const setModal = useSetModal();

  if (login) return null;

  return <LoginBtn onClick={() => setModal(<LoginModal />)}>로그인</LoginBtn>;
}

const LoginBtn = styled.button`
  ${flexCenter}
  position: absolute;
  right: 18px;

  border: 1px solid rgb(235, 235, 235);

  height: 44px;
  padding: 6px 20px;
`;
