import React, { useState, useCallback } from "react";
import styled from "styled-components";
import { useSetModal } from "../../../context/modalContext";
import { flexCenter } from "../../../style/LayoutStyle";

const PlaceMenu = ["풋살", "농구", "족구", "테니스"];

export default function Header() {
  const setModal = useSetModal();
  const [active, setActive] = useState<number>(0);

  const onClick = (idx: number) => {
    if (idx === active) return;
    setActive(idx);
  };

  return (
    <>
      <StHeader>
        <h2>프로필</h2>
        {/* <Ul>
          {PlaceMenu.map((place, idx) => (
            <Place
              key={idx}
              className={active === idx ? "active" : ""}
              onClick={() => onClick(idx)}
            >
              {place}
            </Place>
          ))}
        </Ul>
        <LoginBtn onClick={setModal}>로그인</LoginBtn> */}
      </StHeader>
    </>
  );
}

const StHeader = styled.header`
  ${flexCenter}
  justify-content: space-between;
  position: relative;

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

const Place = styled.li`
  font-size: 18px;

  font-weight: 600;

  margin-left: 0.6rem;

  color: ${(props) =>
    props.className === "active" ? "black" : "rgb(191, 191, 191)"};

  word-break: keep-all;

  white-space: nowrap;
`;
