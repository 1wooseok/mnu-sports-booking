import React from "react";
import styled, { css } from "styled-components";

export interface IconButtonProps {
  size: string;
  icon: React.ReactElement;
  title: string;
  onClick?: () => void;
}

export default function IconButton({
  size,
  icon,
  title,
  onClick,
}: IconButtonProps) {
  return (
    <IconWrap className={size} onClick={onClick}>
      <div>{icon}</div>
      <span>{title}</span>
    </IconWrap>
  );
}

const IconWrap = styled.li`
  text-align: center;

    svg {
      margin: 0 auto;
      color: rgb(102, 102, 102);
      width: ${(props) => (props.className === "large" ? "28px" : "20px")};
      height: ${(props) => (props.className === "large" ? "28px" : "20px")};
    }

    span {
      display: block;
      font-size: ${(props) => (props.className === "large" ? "14px" : "10px")};
    }
  }
`;
