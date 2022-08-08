import React from "react";
import styled from "styled-components";
import { FiArrowUp } from "react-icons/fi";
import { flexCenter } from "../../style/LayoutStyle";

export default function ScrollTopButton() {
  const handleScroll = () => {
    if (!window.scrollY) return;

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <Wrap onClick={handleScroll}>
      <FiArrowUp />
    </Wrap>
  );
}

const Wrap = styled.div`
  ${flexCenter}
  position: fixed;

  right: 14px;
  bottom: 72px;

  width: 36px;
  height: 36px;

  border-radius: 1px;

  background-color: rgb(255, 255, 255);

  box-shadow: rgb(0 0 0 / 12%) 0px 4px 8px 0px;

  transition: left 0.5s ease-in-out 0s, opacity 0.5s ease-in-out 0s;
  z-index: 1000;
`;
