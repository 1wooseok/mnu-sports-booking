import React, { useEffect } from "react";
import styled from "styled-components";
import { deleteBooking } from "../../apis/api";
import BookingListCard from "./BookingListCard";
import { getAllBookingList } from "../../apis/api";
import { TimePickerLoader } from "../modal/loading";
import { UsefetchState, UsefetchDispatch } from "../../context/fetchContext";

function CardContainer({ refetch }) {
  const fetchState = UsefetchState();
  const fetchDispatch = UsefetchDispatch();

  const { loading, data, error } = fetchState;

  useEffect(() => {
    getBookingList(fetchDispatch);
  }, [refetch]);

  if (loading) return <TimePickerLoader />;
  if (error)
    return (
      <div>
        에러가 발생했습니다.{" "}
        <span onClick={() => window.location.reload()}>
          <strong>새로고침</strong>
        </span>
      </div>
    );
  if (!data) return null;

  return (
    <StCardContainer onClick={(e) => cancelBooking(e, fetchDispatch, data)}>
      {typeof data === "string" ? (
        <div>예약이 없습니다.</div>
      ) : (
        data.map((info, idx) => {
          return <BookingListCard key={idx} info={info} />;
        })
      )}
    </StCardContainer>
  );
}

export async function cancelBooking(e, dispatch, data) {
  if (!e.target.className.includes("cancel_booking_btn")) return;
  if (!window.confirm("정말 삭제 하시겠습니까?")) return;
  try {
    const data_attr = e.target.getAttribute("data");
    await deleteBooking(data_attr);
    dispatch({
      type: "SUCCESS",
      payload: data.filter((item) => Number(item.bno) !== Number(data_attr)),
    });
    alert("삭제되었습니다.");
  } catch (err) {
    dispatch({ type: "ERROR", payload: err });
  }
}

async function getBookingList(dispatch) {
  dispatch({ type: "LOADING" });
  try {
    const res = await getAllBookingList();
    dispatch({ type: "SUCCESS", payload: res.data });
  } catch (err) {
    if (err.response.status === 403) window.location.href = "/admin/login";
    dispatch({ type: "ERROR", payload: err });
  }
}

export default CardContainer;

const StCardContainer = styled.div`
  overflow: auto;
  margin-top: 0.5rem;
  height: 70vh;
  width: 100vw;
`;
