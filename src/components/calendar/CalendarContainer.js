import { DateContextProvider } from "../../context/dateContext";
import DateFilter from "./DateFilter";
import DatePicker from "./DatePicker";
import TimePicker from "./TimePicker";
import SurveyLink from "./SurvetLink";
import styled from "styled-components";

function CalendarContainer() {
  return (
    <DateContextProvider>
      <StCalendarContainer>
        <DateFilter />
        <DatePicker />
        <TimePicker />
        <SurveyLink />
      </StCalendarContainer>
    </DateContextProvider>
  );
}

const StCalendarContainer = styled.div`
  width: 90vw;
  max-width: 470px;
  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
  border-radius: 10px;
  padding: 10px 0;
  font-weight: bold;
  margin: 50px auto 0 auto;
`;

export default CalendarContainer;
