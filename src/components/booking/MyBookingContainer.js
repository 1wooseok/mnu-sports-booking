import React, { useState } from "react";
import styled from "styled-components";
import { SmallLoading } from "../modal/loading";
import MyBookingViewer from "./MyBookingViewer";
import { SnumForm } from "./MyBookingForm";

function MyBookingContainer() {
  const [data, setData] = useState(null);
  const [viewState, setViewState] = useState({
    showBtn: true,
    idForm: false,
    listViewer: false,
    loading: false,
  });

  const [inputState, setInputState] = useState({
    snum: "",
  });

  const { snum } = inputState;

  const { showBtn, idForm, listViewer, loading } = viewState;

  function showBtnHandler() {
    setViewState({
      ...viewState,
      showBtn: !showBtn,
      idForm: !idForm,
    });
  }

  return (
    <StContainer>
      {loading && <SmallLoading />}
      {showBtn && <StShowBtn onClick={showBtnHandler}>내역보기</StShowBtn>}
      {idForm && (
        <SnumForm
          inputState={inputState}
          setInputState={setInputState}
          setViewState={setViewState}
          setData={setData}
        />
      )}
      {listViewer && (
        <MyBookingViewer snum={snum} data={data} setViewState={setViewState} />
      )}
    </StContainer>
  );
}

const StContainer = styled.div`
  position: absolute;
  top: 2.2rem;
  right: 0.5rem;

  padding: 0.5rem 0;

  border-radius: 3px;
  border: 1px solid silver;

  font-size: 14px;
  font-weight: 500;

  z-index: 2;

  background-color: white;

  text-align: center;
`;

const StShowBtn = styled.div`
  min-width: 7rem;
  min-hegith: 2rem;

  width: match-content;
  height: match-content;
`;
export default MyBookingContainer;
