import styled, { css } from "styled-components";

export const flexCenter = css`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StHeader = styled.header`
  ${flexCenter}
  justify-content: space-between;
  position: relative;

  text-align: center;

  width: 100vw;
  height: 60px;

  padding: 0px 18px;

  background: rgb(255, 255, 255);
  box-shadow: rgb(235 235 235) 0px -0.5px 0px 0px inset;

  h2 {
    width: 100%;
    font-size: 17px;
    font-weight: 500;
  }
`;

export const CardList = styled.ul`
  height: calc(100vh - 120px);
  overflow: auto;
`;
