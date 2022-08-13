import React from "react";
import { useState } from "react";
import styled from "styled-components";
import { CgClose } from "react-icons/cg";
import { HiOutlineMenu } from "react-icons/hi";
import MyBookingContainer from "../../myBooking/MyBookingContainer";

function HamburgerBtn() {
  const [myListVisibility, setMyListVisibility] = useState(false);

  function toggle() {
    setMyListVisibility((prev) => !prev);
  }

  return (
    <StHamburgerBtnWrap>
      {myListVisibility ? (
        <CgClose onClick={toggle} />
      ) : (
        <HiOutlineMenu onClick={toggle} />
      )}
      {myListVisibility && <MyBookingContainer />}
    </StHamburgerBtnWrap>
  );
}

const StHamburgerBtnWrap = styled.span`
  margin-right: 1.3rem;
  font-size: 20px;
`;

export default HamburgerBtn;
