import React from "react";
import MyList from "./MyList";
import { useState } from "react";
import styled from "styled-components";
import { HiOutlineMenu } from "react-icons/hi";
import MyBookingContainer from "../booking/MyBookingContainer";

function HamburgerBtn() {
  const [myListVisibility, setMyListVisibility] = useState(false);

  return (
    <StHamburgerBtnWrap>
      <HiOutlineMenu onClick={() => setMyListVisibility((prev) => !prev)} />
      {myListVisibility && <MyList />} 
    </StHamburgerBtnWrap>
  );
}

const StHamburgerBtnWrap = styled.span`
  margin-right: 1.3rem;
  font-size: 20px;
`;

export default HamburgerBtn;
