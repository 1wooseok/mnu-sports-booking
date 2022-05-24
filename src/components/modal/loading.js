import React from "react";
import { RotatingLines } from "react-loader-spinner";
import styled from "styled-components";

const Loading = () => (
  <div className="loader">
    <Position>
      <RotatingLines width="50" strokeColor="black" strokeWidth="2" />
    </Position>
  </div>
);

export const TimePickerLoader = () => {
  return (
    <StTimePickerLoaderPositioner>
      <RotatingLines width="30" strokeColor="black" strokeWidth="4" />
    </StTimePickerLoaderPositioner>
  );
};

export const SmallLoading = () => {
  return (
    <StSamllLoading>
      <RotatingLines width="30" strokeColor="black" strokeWidth="4" />
    </StSamllLoading>
  );
};

export const BtnLoading = () => {
  return (
    <StBtnLoading>
      <RotatingLines width="30" strokeColor="black" strokeWidth="4" />
    </StBtnLoading>
  )
}

const Position = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;

const StTimePickerLoaderPositioner = styled.div`
  position: absolute;
  left: 50%;
  top: 65%;
  transform: translate(-50%, -50%);
  z-index: 10;
`;

const StSamllLoading = styled.div`
  width: 13rem;
  height: 12rem;
  
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StBtnLoading = styled.div`
  height: 1em;
  
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default Loading;
