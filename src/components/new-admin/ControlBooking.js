import React from "react";
import styled from "styled-components";

const columns = ["예약 번호", "학번", "이름", "학과", "연락처"];
const mock = [
  {
    bno: 1,
    sid: "173332",
    name: "Bob",
    major: "computer-science",
    contact: "010-7542-2376",
  },
  {
    bno: 2,
    sid: "211422",
    name: "Michael",
    major: "physics",
    contact: "010-4132-2363",
  },
  {
    bno: 3,
    sid: "152517",
    name: "Anne",
    major: "math-education",
    contact: "010-5221-7145",
  },
];

function ControlBooking() {
  return (
    <StBookingList>
      <h2>예약 목록</h2>
      <StColumns>
        {columns.map((col) => (
          <StRow key={col}>{col}</StRow>
        ))}
      </StColumns>
      {mock.map((data) => {
        return (
          <StRow>
            {data.bno}
            {data.sid}
            {data.name}
            {data.major}
            {data.contact}
            <StDelBtn>삭제</StDelBtn>
          </StRow>
        );
      })}
    </StBookingList>
  );
}

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

const StDelBtn = styled.button`
  
`;

export default ControlBooking;

const method = ["예약 강제 취소"];
const modal = ["정말 삭제하시겠습니까? "];
