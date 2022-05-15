import React from "react";
import styled from "styled-components";

function BookingListCard({ cancelBooking }) {
  return (
    <StListCard>
      <StInfo>
        <StRow>
          <StKey>사용자 : </StKey>
          <StValue> 173332 정우석 ( 컴퓨터공학과 )</StValue>
        </StRow>
        <StRow>
          <StKey>연락처 : </StKey>
          <StValue> 010-2107-9757</StValue>
        </StRow>
        <StRow>
          <StKey>날짜 : </StKey>
          <StValue> 2022.05.15</StValue>
        </StRow>
        <StRow>
          <StKey>시간 : </StKey>
          <StValue> 14:00 - 16:00</StValue>
        </StRow>
      </StInfo>
      <StBtnSection>
        <StCancelBtn onClick={cancelBooking}>취소</StCancelBtn>
      </StBtnSection>
    </StListCard>
  );
}

const StListCard = styled.div`
  display: flex;
  background-color: #f2f6f9;
  font-size: 14px;
  width: 90vw;
  min-height: 6em;
  border-radius: 4px;
  font-weight: 500;
  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
  padding: 10px;
  margin: 15px auto;
`;

const StCancelBtn = styled.button`
  padding: 0.2em 1em;
  font-weight: 600;
  background-color: rgb(0, 127, 255);
  color: rgb(255, 255, 255);
  font-size: 15px;
  border: none;
  border-radius: 3px;
`;

const StInfo = styled.div`
  flex: 0.8;
`;

const StBtnSection = styled.div`
  text-align: center;
  flex: 0.2;
`;

const StRow = styled.div`
  display: flex;
  margin: 5px 0;
`;
const StValue = styled.span``;
const StKey = styled.span`
  font-weight: 400;
  opacity: 0.5;
`;

export default BookingListCard;
