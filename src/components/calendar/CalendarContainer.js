import { DateContextProvider } from "../../context/dateContext";
import DateFilter from "./DateFilter";
import DatePicker from "./DatePicker";
import TimePicker from "./TimePicker";
import styled from "styled-components";

const surveyLink = "https://naver.me/FIp9ILfg";

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

function SurveyLink() {
  return (
    <StLinkBox>
      <StLink href={surveyLink} target="_blank" rel="noreferrer">
        &gt; 피드백을 남겨주세요
      </StLink>
    </StLinkBox>
  );
}

const StCalendarContainer = styled.div`
  width: 90vw;
  max-width: 470px;
  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
  border-radius: 10px;
  padding: 10px 0;
  font-weight: bold;
`;

const StLinkBox = styled.div`
  position: relative;
  bottom:1rem;
  right: 0.7rem;
  color: red;
`;

const StLink = styled.a`
  font-size: 0.7rem;
  font-weight: normal;
  text-decoration: underline;
  text-underline-position: under;
  float: right;
  &:hover {
    font-weight: 500;
  }
`;

export default CalendarContainer;
