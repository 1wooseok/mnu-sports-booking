import HomeButton from "../button/homeButton";
import styled from "styled-components";
import HamburgerBtn from "./HamburgerBtn";

export default function Header() {
  return (
    <>
      <StMenu>
        <HomeButton url="/" />
        <HamburgerBtn />
      </StMenu>
    </>
  );
}

const StMenu = styled.menu`
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 45px;

  box-shadow: rgb(0 0 0 / 10%) 0px -1px 0px 0px inset;
  background-color: rgb(255, 255, 255);

  z-index: 10000;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;
