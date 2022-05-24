import React, { useReducer } from "react";
import styled from "styled-components";
import { SmallLoading } from "../modal/loading";
import MyBookingViewer from "./MyBookingViewer";
import useInputChange from "../../hook/useInputs";
import { SnumForm, SpwForm } from "./MyBookingForm";
import { getMyBooking, deleteMyBooking } from "../../apis/api";

function viewReducer(state, action) {
  switch (action.type) {
    case "SHOW_BTN":
      return state;
    case "ID_FORM":
      console.log(action.payload);
      return (
        <SnumForm
          onChange={action.payload.onChange}
          snum={action.payload.snum}
        />
      );
    case "PW_FORM":
      return (
        <SpwForm onChange={action.payload.onChange} spw={action.payload.spw} />
      );
    case "MY_LIST":
      return <MyBookingViewer data={action.payload} />;
    case "LOADING":
      return <SmallLoading />;
    default:
      return state;
  }
}

function MyBookingContainer() {
  const [{ snum, spw }, onChange] = useInputChange({ snum: "", spw: "" });
  const [viewState, dispatch] = useReducer(
    viewReducer,
    <StShowBtn onClick={handleShowBtn}>내역보기</StShowBtn>
  );

  function handleShowBtn() {
    dispatch({ type: "ID_FORM", payload: { onChange, snum } });
  }

  function hadleIdForm() {
    dispatch({ type: "LOADING" });
    const data = getMyBookingList(snum);
    dispatch({ type: "MY_LIST", payload: { data } });
  }

  function handleDeleteBtn() {
    dispatch({ type: "PW_FORM", payload: { onChange, spw } });
  }

  // function handleDeleteForm(data) {
  //   dispatch({ type: "LOADING" });
  //   const data = cancelMyBooking(data);

  // }
  return <StContainer>{viewState}</StContainer>;
}

async function getMyBookingList(snum) {
  try {
    const res = await getMyBooking({ snum });
    return res.data;
  } catch (err) {
    throw new Error(`${err} - 내 예약목록 받아올떄 에러 `);
  }
}

async function cancelMyBooking(data) {
  try {
    const res = await deleteMyBooking(data);
    return res.data;
  } catch (err) {
    console.log(`${err} - 내 예약 취소할때 에러 `);
  }
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
