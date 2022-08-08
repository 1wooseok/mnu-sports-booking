import React from "react";
import styled from "styled-components";
import { flexCenter } from "../../style/LayoutStyle";

export interface TabProps {
  currentTab: number;
  onClick: (tabNumber: number) => void;
}

export default function ActivityTabl({ currentTab, onClick }: TabProps) {
  return (
    <List>
      <ListItem
        className={currentTab === 0 ? "active" : ""}
        onClick={() => onClick(0)}
      >
        게시글
      </ListItem>
      <ListItem
        className={currentTab === 1 ? "active" : ""}
        onClick={() => onClick(1)}
      >
        댓글
      </ListItem>
      <ListItem
        className={currentTab === 2 ? "active" : ""}
        onClick={() => onClick(2)}
      >
        내예약
      </ListItem>
    </List>
  );
}

const List = styled.ol`
  display: flex;
  align-items: center;
  height: 44px;
  padding: 0px 18px;
  background-color: rgb(255, 255, 255);
  box-shadow: rgb(245 246 247) 0px -1px 0px 0px inset;
`;

const ListItem = styled.li`
  ${flexCenter}

  flex: 1 1 0%;
  height: 100%;
  font-size: 15px;
  font-weight: 400;
  color: ${(props) =>
    props.className === "active" ? "black" : "rgb(191, 191, 191)"};
  box-shadow: ${(props) =>
    props.className === "active"
      ? "rgb(51 51 51) 0px -1px 0px 0px inset"
      : "unset"};
`;
