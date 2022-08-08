import React from "react";
import styled from "styled-components";
import { GoCommentDiscussion } from "react-icons/go";

interface CardFooterProps {
  commentCount: number;
}

export default function CardFooter({ commentCount }: CardFooterProps) {
  return (
    <Wrap>
      <Button>
        <GoCommentDiscussion />
        <Count>{commentCount}</Count>
      </Button>
    </Wrap>
  );
}

const Wrap = styled.div`
  display: flex;
  align-items: center;

  height: 28px;
`;

const Button = styled.button`
  display: flex;
  align-items: center;

  height: 100%;

  padding: 0 8px;

  border: 1px solid rgb(235, 235, 235);
  transition: background-color 1s ease-out 0s;

  svg {
    width: 20px;
    height: 20px;
    color: rgb(200, 200, 217);
  }
`;

const Count = styled.span`
  margin-left: 6px;
  font-size: 13px;
  color: rgb(102, 102, 102);
`;
