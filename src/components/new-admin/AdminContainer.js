import React from "react";
import styled from "styled-components";
import BookingListCard from "./BookingListCard";
import SearchUser from "./SearchUser";

async function getBookingList() {
  try {
  } catch (err) {}
}

async function cancelBooking() {
  try {
  } catch (err) {
    console.log(`${err} - (Admin) 사용자 예약 강제 취소시 발생한 에러`);
  }
}

function AdminContainer() {
  return (
    <StAdminContainer>
      <StTitle>관리자</StTitle>
      <SearchUser />
      <StCardContainer>
        <BookingListCard />
        <BookingListCard />
        <BookingListCard />
        <BookingListCard />
        <BookingListCard />
        <BookingListCard />
        <BookingListCard />
        <BookingListCard />
      </StCardContainer>
    </StAdminContainer>
  );
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

const StBookingList = styled.ul`
  width: 90vw;

  border: 1px solid black;
`;

const StColumns = styled.ul`
  display: flex;
  justify-content: space-around;

  border-bottom: 1px solid black;
  padding: 10px 0;
`;

const StRow = styled.li`
  display: flex;
  justify-content: space-around;
`;

const StDelBtn = styled.button``;

export default AdminContainer;

const method = ["예약 강제 취소"];
const modal = ["정말 삭제하시겠습니까? "];
