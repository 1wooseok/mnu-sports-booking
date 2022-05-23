import React from "react";
import styled from "styled-components";
import { useNavigate } from 'react-router-dom';

function ReserveBtn({ fno, dateState, userPick }) {
  const navigate = useNavigate();

  function handleClick() {
    if(userPick.length === 0) return;
    navigate('/reserve', { state: {fno, dateState, userPick}});
  }

  return (
    <>
      <StReserveBtn
        className={userPick.length === 0 ? "__disable" : ""}
        onClick={handleClick}
      >
        예약하기
      </StReserveBtn>
    </>
  );
}

const StReserveBtn = styled.div`
  opacity: ${(props) => (props.className === "__disable" ? "0.4" : "1")};
  background-color: mediumseagreen;
  border: 1px solid whitesmoke;
  transition: opacity 0.1s;
  margin-top: 2em;
  padding: 0.6em 2em;
  border-radius: 5px;
  font-weight: bold;
  font-size: 12px;
  &:hover {
    cursor: pointer
  }
`;

export default ReserveBtn;
