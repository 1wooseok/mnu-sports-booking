import React, { useState } from "react";
import styled from "styled-components";
import { checkIdFormat } from "../../utils/check";
import useInputChange from "../hook/useInputs";

function MyList() {
  const [inputToggle, setInputToggle] = useState(false);

  function handleToggle() {
    setInputToggle((prev) => !prev);
  }
  return (
    <MyListContainer>
      {inputToggle ? (
        <SnumInput />
      ) : (
        <MyListBtn onClick={handleToggle}>내역보기</MyListBtn>
      )}
    </MyListContainer>
  );
}

function SnumInput() {
  const [{ snum }, onReset, onChange] = useInputChange({
    snum: "",
  });

  function handleSubmit(e) {
    e.preventDefault();
    if (!checkIdFormat(Number(snum))) {
      return alert("학번을 확인해주세요.");
    }
  }

//   async function 
  return (
    <form onSubmit={handleSubmit}>
      <StSnumInput
        name="snum"
        value={snum}
        onChange={onChange}
        placeholder="학번을 입력하세요."
      />
    </form>
  );
}

const MyListContainer = styled.div`
  position: absolute;
  top: 2.2rem;
  right: 0.5rem;

  z-index: 10001;

  border-radius: 3px;

  background-color: white;
  box-shadow: rgb(0 0 0 / 10%) 0px -1px 2px 0px inset;

  text-align: center;
  font-size: 14px;
  font-weight: 500;

  padding: 0.5rem 0;
`;

const MyListBtn = styled.div`
  min-width: 7rem;
  width: match-content;
  min-hegith: 2rem;
  height: match-content;
`;

const StSnumInput = styled.input`
  min-width: 7rem;
  max-width: 8.5rem;

  border: none;
  outline: none;
  padding: 0 1rem;
`;
export default MyList;
