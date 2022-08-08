import React from "react";
import styled, { css } from "styled-components";

export interface IconButtonProps {
  size: string;
  icon: React.ReactElement;
  title: string;
  onClick?: () => void;
  currentTab?: string;
}

export default function IconButton({
  title,
  size,
  icon,
  onClick,
  currentTab,
}: IconButtonProps) {
  return (
    <IconWrap className={size} onClick={onClick}>
      <Icon className={currentTab === title ? "curr" : ""}>{icon}</Icon>
      <span>{title}</span>
    </IconWrap>
  );
}

const IconWrap = styled.li`
  text-align: center;
  svg {
    margin: 0 auto;
    width: ${(props) => (props.className === "large" ? "28px" : "20px")};
    height: ${(props) => (props.className === "large" ? "28px" : "20px")};
  }

  span {
    display: block;
    font-size: ${(props) => (props.className === "large" ? "14px" : "10px")};
  }
`;

const Icon = styled.div`
  color: ${(props) =>
    props.className === "curr" ? "black" : "rgb(153, 153, 153)"};
`;
