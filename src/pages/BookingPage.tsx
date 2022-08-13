import React from "react";
import CalendarContainer from "../components/calendar/CalendarContainer";
import Header from "../components/layout/header/Header";
import CommunityHeader from "../components/community/CommunityHeader";

export default function BookingPage() {
  return (
    <>
      <Header>
        <CommunityHeader />
      </Header>
      <CalendarContainer />
    </>
  );
}
