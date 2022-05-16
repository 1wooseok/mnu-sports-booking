import React, { useState, useEffect } from "react";
import styled from "styled-components";
import BookingListCard from "./BookingListCard";
import SearchUser from "./SearchUser";
import { getAllBookingList, deleteBooking } from "../../apis/api";
import { UsefetchState, UsefetchDispatch } from "../../context/fetchContext";

function AdminContainer() {
  const state = UsefetchState();
  const dispatch = UsefetchDispatch();
  const { loading, data, error } = state;

  useEffect(() => {
    getBookingList(dispatch);
  }, []);

  if (loading) return <div>로딩중..</div>;
  if (error) return <div>에러가 발생했습니다.</div>;
  if (!data) return null;
  if (typeof data === 'string') return <div>아직 예약이 없습니다.</div>;
  
  return (
    <StAdminContainer>
      <StTitle>관리자</StTitle>
      <SearchUser />
      <StCardContainer onClick={(e) => cancelBooking(e, dispatch, data)}>
        {data.map((info, idx) => {
          return (
            <BookingListCard
              key={idx}
              info={info}
            />
          );
        })}
      </StCardContainer>
    </StAdminContainer>
  );
}

async function getBookingList(dispatch) {
  dispatch({ type: "LOADING" });
  try {
    const res = await getAllBookingList();
    dispatch({ type: "SUCCESS", payload: res.data });
  } catch (err) {
    dispatch({ type: "ERROR", payload: err });
  }
}

async function cancelBooking(e, dispatch, data) {
  if (!e.target.className.includes('cancel_booking_btn')) return;
  if (!window.confirm("정말 삭제 하시겠습니까?")) return;
  try {
    await deleteBooking(e.target.id);
    dispatch({ type: "SUCCESS", payload: data.filter(item => Number(item.bno) !== Number(e.target.id))});
    alert('삭제되었습니다.');
  } catch (err) {
    dispatch({ type: "ERROR", payload: err });
  }
}

const StAdminContainer = styled.div`
  width: 100vw;
  height: 100vh;
  margin: 30px 0;
`;

const StCardContainer = styled.div`
  overflow: auto;
  height: 100%;
  width: 100vw;
`;
const StTitle = styled.h2`
  margin-top: 15px;
  text-align: center;
`;

export default AdminContainer;