import React from "react";
import { CardList } from "../../style/LayoutStyle";
import MyBookingCard from "../card/MyBookingCard";

interface MyBookingsProps {
  date: string;
  time: string;
  place: string;
  sports: string;
}

export default function MyBookingList() {
  return (
    <CardList>
      <MyBookingCard />
      <MyBookingCard />
    </CardList>
  );
}
