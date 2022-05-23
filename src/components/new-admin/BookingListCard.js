import React from "react";
import styled from "styled-components";

function BookingListCard({ info }) {
  const {snum, sname, smajor, startTime, endTime} = info;
  return (
    <StListCard>
      <StInfo>
        <StRow>
          <StKey>사용자 : </StKey>
          <StValue>{`${snum} ${sname} (${smajor})`}</StValue>
        </StRow>
        <StRow>
          <StKey>날짜 : </StKey>
          <StValue>{startTime.split(' ')[0]}</StValue>
        </StRow>
        <StRow>
          <StKey>시간 : </StKey>
          <StValue>{`${startTime.split(' ')[1]} - ${endTime.split(' ')[1]}`}</StValue>
        </StRow>
      </StInfo>
      <StBtnSection>
        <StCancelBtn data={info.bno} className="cancel_booking_btn">취소</StCancelBtn>
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
  padding: 0.2em 0.5em;
  font-weight: 600;
  background-color: rgb(0, 127, 255);
  color: rgb(255, 255, 255);
  font-size: 15px;
  border: none;
  border-radius: 3px;
`;

const StInfo = styled.div`
  flex: 0.85;
`;

const StBtnSection = styled.div`
  text-align: center;
  flex: 0.15;
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
