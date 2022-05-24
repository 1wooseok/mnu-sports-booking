import React from "react";
import styled from "styled-components";

function MyBookingViewer({ data }) {
  return (
    <StMyBookingViewer>
      {data.map((booking) => (
        <MyBookingCard key={booking.bno}>{booking}</MyBookingCard>
      ))}
    </StMyBookingViewer>
  );
}

function MyBookingCard() {
  return <div>그냥 카드</div>;
}

export default MyBookingViewer;

const StMyBookingViewer = styled.div`
  padding: 0.5rem 1rem;

  min-width: 14rem;
  max-width: 17rem;

  min-height: 12rem;
  max-height: 12rem;

  overflow: auto;
`;

const StNoResult = styled.p`
  padding: 0.2rem 0.7rem;
`;
