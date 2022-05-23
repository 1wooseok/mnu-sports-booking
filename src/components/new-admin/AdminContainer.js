import React, { useEffect } from "react";
import styled from "styled-components";
import BookingListCard from "./BookingListCard";
import SearchUser from "./SearchUser";
import {
  getAllBookingList,
  deleteBooking,
  postAdminLogout,
} from "../../apis/api";
import { UsefetchState, UsefetchDispatch } from "../../context/fetchContext";
import { useNavigate } from "react-router-dom";

function AdminContainer() {
  const state = UsefetchState();
  const dispatch = UsefetchDispatch();
  const navigate = useNavigate();
  const { loading, data, error } = state;

  async function adminLogout() {
    if (!window.confirm("로그아웃 하시겠습니까?")) return;
    try {
      await postAdminLogout();
      alert("로그아웃 되었습니다.");
      navigate("/admin/login", { replace: true });
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    getBookingList(dispatch);
  }, []);

  if (loading) return <div>로딩중..</div>;
  if (error) return <div>에러가 발생했습니다. <span onClick={() => window.location.reload()}>새로고침</span></div>;
  if (!data) return null;
  if (typeof data === "string") return <div>아직 예약이 없습니다.</div>;

  return (
    <StAdminContainer>
      <StHeader>
        관리자<StLogout onClick={adminLogout}>로그아웃</StLogout>
      </StHeader>

      <SearchUser />
      <StCardContainer onClick={(e) => cancelBooking(e, dispatch, data)}>
        {data.map((info, idx) => {
          return <BookingListCard key={idx} info={info} />;
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
    if (err.response.status === 403) redirectToLogin();
    dispatch({ type: "ERROR", payload: err });
  }
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

function redirectToLogin() {
  return (window.location.href = "/admin/login");
}

const StAdminContainer = styled.div`
  width: 100vw;
  height: 90vh;
`;

const StCardContainer = styled.div`
  overflow: auto;
  margin-top: 0.5rem;
  height: 70vh;
  width: 100vw;
`;

const StHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 80vw;
  margin: 0.5rem auto;
  text-align: center;
  font-weight: bold;
  font-size: 30px;
`;

const StLogout = styled.span`
  font-size: 15px;
  opacity: 0.5;
  &:hover {
    opacity: 1;
  }
`;


export default AdminContainer;
