import { useState } from "react";
import styled from "styled-components";
import { HiOutlineMenu } from "react-icons/hi";

function HamburgerBtn() {
  const [listToggle, setListToggle] = useState(false);
  const [inputBox, setInputBox] = useState(false);

  function handleToggle() {
    setListToggle((prev) => !prev);
  }

  function handleInputBox() {
    setListToggle((prev) => !prev);
    setInputBox((prev) => !prev);
  }

  return (
    <StHamburgerBtn>
      <HiOutlineMenu onClick={handleToggle} />
      {listToggle && (
        <StListToggle onClick={handleInputBox}>예약내역</StListToggle>
      )}
      {
        inputBox && <SnumInput />
      }
    </StHamburgerBtn>
  );
}

function SnumInput() {
  return (
    <StSnumForm>
      <StSnumInput placeholder="학번을 입력해 주세요." />
    </StSnumForm>
  );
}

const StHamburgerBtn = styled.span`
  margin-right: 1.3rem;
  font-size: 20px;
`;

const StSnumForm = styled.form`
  position: absolute;
  top: 2.2rem;
  right: 0.5rem;

  width: 10rem;
  height: match-content;

  padding: 0.5rem 0;
  z-index: 1001;

  box-shadow: rgb(0 0 0 / 10%) 0px -1px 0px 0px inset;
  border-radius: 3px;
`;

const StSnumInput = styled.input`
  border: none;
  outline: none;
  padding: 0 1rem;
`;

const StListToggle = styled.div`
  position: absolute;
  top: 2.2rem;
  right: 0.5rem;

  width: 7rem;
  height: match-content;

  text-align: center;
  z-index: 1001;

  box-shadow: rgb(0 0 0 / 10%) 0px -1px 0px 0px inset;
  border: 1px solid black;
  border-radius: 3px;

  font-size: 16px;
`;
export default HamburgerBtn;
