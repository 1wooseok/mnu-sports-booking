import React from "react";
import useInputChange from "../hook/useInputs";
import styled from "styled-components";

function SearchUser() {
  const [{ sid }, onChange] = useInputChange({ sid: '' });

  return (
    <StSearchForm onSubmit={e => e.preventDefault()}>
      <input type="text" sid={sid} onChange={onChange} placeholder="학번으로 검색" />
      <button>검색</button>
    </StSearchForm>
  );
}

const StSearchForm = styled.form`
  display: flex;
  width: 100vw;
  justify-content: center;
`;

export default SearchUser;
