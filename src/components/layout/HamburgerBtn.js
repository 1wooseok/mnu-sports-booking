import { useState } from "react";
import styled from "styled-components";
import { HiOutlineMenu } from "react-icons/hi";
import MyList from "./MyList";

function hamburgerReducer(action, state) {
  switch (action.type) {
    case "TEXT":
    case "INPUT":
    case "HAMBURGER":
    default:
      return;
  }
}

function HamburgerBtn() {
  const [myListContainer, setMyListContainer] = useState(false);
  
  function handleClick() {
    setMyListContainer(prev => !prev);
  }

  return (
    <StHamburgerBtnWrap>
      <HiOutlineMenu onClick={handleClick} />
      {myListContainer && <MyList />}
    </StHamburgerBtnWrap>
  );
}

const StHamburgerBtnWrap = styled.span`
  margin-right: 1.3rem;
  font-size: 20px;
`;

// const StListToggle = styled.div`
//   position: absolute;
//   top: 2.2rem;
//   right: 0.5rem;

//   width: 7rem;
//   height: match-content;

//   text-align: center;
//   z-index: 1001;

//   box-shadow: rgb(0 0 0 / 10%) 0px -1px 0px 0px inset;
//   border: 1px solid black;
//   border-radius: 3px;

//   font-size: 16px;
// `;
export default HamburgerBtn;
