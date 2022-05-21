import React, { useState } from "react";
import useInputChange from "../hook/useInputs";
import styled from "styled-components";
import { UsefetchState, UsefetchDispatch } from "../../context/fetchContext";
import BookingListCard from "./BookingListCard";
import { cancelBooking } from "./AdminContainer";

function SearchUser() {
  const state = UsefetchState();
  const dispatch = UsefetchDispatch();

  const [searchResult, setSearchResult] = useState(false);
  const [visible, setVisible] = useState(true);
  const [{ snum }, onReset, onChange] = useInputChange({
    snum: "",
  });

  function handleSubmit(e) {
    e.preventDefault();
    searchFromResult(snum);
  }

  function searchFromResult() {
    setSearchResult(true);
  }

  return (
    <>
      <StSearchForm onSubmit={handleSubmit}>
        <input
          type="text"
          name="snum"
          snum={snum}
          onChange={onChange}
          placeholder="학번으로 검색"
        />
        <button>검색</button>
      </StSearchForm>
      {searchResult && (
        <>
          <StToggleDiv>
            <StToggleSpan onClick={() => setVisible((prev) => !prev)}>
              검색 결과 {visible ? "접기" : "펼치기"}
            </StToggleSpan>
          </StToggleDiv>
          <StSearchResultContainer
            className={visible && "visible"}
            onClick={(e) => cancelBooking(e, dispatch, state.data)}
          >
            {state.data
              .filter((user) => Number(user.snum) === Number(snum))
              .map((user) => (
                <BookingListCard key={user.bno} info={user} />
              ))}
          </StSearchResultContainer>
        </>
      )}
    </>
  );
}

const StSearchForm = styled.form`
  display: flex;
  width: 100vw;
  justify-content: center;
`;

const StSearchResultContainer = styled.div`
  display: ${(props) => (props.className === "visible" ? "block" : "none")};

  width: 100vw;
  height: match-content;

  padding: 10px 0;

  border-bottom: 1px solid black;
  border-radius: ;

  text-align: center;
`;

const StToggleDiv = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 90vw;
  margin: 20px 0 10px 0;
`;

const StToggleSpan = styled.span`
  width: match-content;
  border: 1px solid black;
  border-radius: 3px;
`;

export default SearchUser;
