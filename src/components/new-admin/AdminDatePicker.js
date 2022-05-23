import React from "react";
import styled from "styled-components";
import { UsefetchDispatch } from "../../context/fetchContext";
import {
    getBookingListByDate,
  } from "../../apis/api";

function AdminDatePicker() {
  const fetchDispatch = UsefetchDispatch();

  return (
    <StDatePicker>
      <input
        type="date"
        onChange={(e) => fetchBookingListByDate(fetchDispatch, e.target.value)}
      />
    </StDatePicker>
  );
}

async function fetchBookingListByDate(dispatch, data) {
    dispatch({ type: "LOADING" });
    try {
      const res = await getBookingListByDate({ date: data });
      dispatch({ type: "SUCCESS", payload: res.data });
    } catch (err) {
      if (err.response.status === 403) window.location.href = "/admin/login";
      dispatch({ type: "ERROR", payload: err });
    }
  }
  
  export default AdminDatePicker;

const StDatePicker = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
`;
