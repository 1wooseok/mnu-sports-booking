import React from "react";
import { Link } from "react-router-dom";
import Logo from "./components/modal/logo";
import styled from "styled-components";

const facilities = [
  {
    fno: 1,
    name: "풋살장",
    place: "공대 근처",
    placeUrl: "www.naver.com",
    maxHour: 2,
  },
  {
    fno: 29,
    name: "테니스장",
    place: "공대 근처",
    placeUrl: "www.naver.com",
    maxHour: 2,
  },
  {
    fno: 34,
    name: "족구장",
    place: "간호대 앞",
    placeUrl: "www.adfsd.com",
    maxHour: 2,
  },
  {
    fno: 36,
    name: "대운동장",
    place: "editTest",
    placeUrl: "editTest",
    maxHour: 3,
  },
];

function App() {
  return (
    <StAppContainer>
      <Logo />
      {facilities.map((facility, idx) => {
        if (idx === 0) {
          return (
            <StAppLink key={idx} to={`booking/${facility.fno}`}>
              {facility.name}
            </StAppLink>
          );
        }
        return <StDisableLink key={idx}>{facility.name}</StDisableLink>;
      })}
    </StAppContainer>
  );
}

const StAppContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
`;

const StAppLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100vw;
  height: calc(100vh / 4);

  color: black;
  font-size: large;
  font-weight: bold;

  background-color: F5F4F2;
  border-bottom: 1px solid gray;

  opacity: 0.6;
  transition: 0.3s;
  &:hover {
    transition: 0.35;
    opacity: 1;
    background-color: white;
    font-size: 20px;
  }
`;

const StDisableLink = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: calc(100vh / 4);
  border-bottom: 1px solid gray;
  font-size: large;
  text-decoration: line-through;
  color: black;
  transition: 0.3s;
  opacity: 0.6;
  background-color: #929292;
`;

export default App;
