import React, { useState } from "react";
import styled from "styled-components";
import { SpwForm } from "./MyBookingForm";

function MyBookingViewer({ snum, data }) {
  const [spw, setSpw] = useState("");

  if (typeof data === "string") return <StNoResult>{data}</StNoResult>;
  if (!data) return <h1>에러가 발생했습니다. 새로고침 해주세요.</h1>;

  return (
    <StViewerContainer>
      <ul>
        {[...data].reverse().map((booking) => {
          const date = booking.startTime.split(" ")[0];
          const start = booking.startTime.split(" ")[1];
          const end = booking.endTime.split(" ")[1];
          return (
            <StListCard key={booking.bno}>
              <div>{`${date} / ${start} - ${end}`}</div>
              <SpwForm
                bno={booking.bno}
                snum={snum}
                spw={spw}
                setSpw={setSpw}
              />
            </StListCard>
          );
        })}
      </ul>
    </StViewerContainer>
  );
}

export default MyBookingViewer;

const StViewerContainer = styled.div`
  padding: 0.5rem 1rem;

  min-width: 14rem;
  max-width: 17rem;

  min-height: 12rem;
  max-height: 12rem;

  overflow: auto;
`;

const StListCard = styled.div`
  border-bottom: 1px solid black;
  padding: 0.5rem 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const StNoResult = styled.p`
  padding: 0.2rem 0.7rem;
`;

const StXbtnWrap = styled.div`
  display: flex;
  align-items: center;
`;

