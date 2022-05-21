import React from 'react';
import { useState } from "react";
import styled from "styled-components";
import { HiOutlineMenu } from "react-icons/hi";
import MyList from "./MyList";

function HamburgerBtn() {
  const [myListVisibility, setMyListVisibility] = useState(false);
  
  function handleClick() {
    setMyListVisibility(prev => !prev);
  }

  return (
    <StHamburgerBtnWrap>
      <HiOutlineMenu onClick={handleClick} />
      {myListVisibility && <MyList />}
    </StHamburgerBtnWrap>
  );
}

const StHamburgerBtnWrap = styled.span`
  margin-right: 1.3rem;
  font-size: 20px;
`;

export default HamburgerBtn;
