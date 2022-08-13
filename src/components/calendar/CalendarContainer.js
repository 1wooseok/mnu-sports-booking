import React from 'react';
import { DateContextProvider } from "../../context/dateContext";
import DateFilter from "./DateFilter";
import DatePicker from "./DatePicker";
import TimePicker from "./TimePicker";
import styled from "styled-components";

function CalendarContainer() {
  return (
    <DateContextProvider>
      <StCalendarContainer>
        <DateFilter />
        <DatePicker />
        <TimePicker />
      </StCalendarContainer>
    </DateContextProvider>
  );
}

const StCalendarContainer = styled.div`
  width: 90vw;
  max-width: 470px;

  padding: 10px 0;
  margin: 1.2rem auto;

  background-color: white;

  border-radius: 10px;

  font-weight: 500;

  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
`;

export default CalendarContainer;
