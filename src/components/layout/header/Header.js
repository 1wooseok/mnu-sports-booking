import React from 'react';
import styled from "styled-components";
import { useSetModal } from '../../../context/modalContext';
import { flexCenter } from '../../../style/LayoutStyle';

export default function Header() {
  const setModal = useSetModal();

  return (
    <>
      <StHeader>
        <Ul>
          <PlaceMenu>풋살</PlaceMenu>
          <PlaceMenu>농구</PlaceMenu>
          <PlaceMenu>족구</PlaceMenu>
          <PlaceMenu>테니스</PlaceMenu>
        </Ul>
        <LoginBtn onClick={setModal}>로그인</LoginBtn>
      </StHeader>
    </>
  );
}

const StHeader = styled.header`
    ${flexCenter}
    justify-content: space-between;
    position: relative;

    height: 60px;

    padding: 0px 18px;

    background: rgb(255, 255, 255);
`;

const LoginBtn = styled.button`
    ${flexCenter}

    border: 1px solid rgb(235, 235, 235);

    height: 44px;
    padding: 6px 20px;
`;

const Ul = styled.ul`
  ${flexCenter};
`;

const PlaceMenu = styled.li`
    font-size: 18px;

    font-weight: 600;

    margin-left: 0.6rem;

    color: rgb(191, 191, 191);

    word-break: keep-all;

    white-space: nowrap;
`;