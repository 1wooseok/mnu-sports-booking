import React from "react";
import styled from "styled-components";

export default function PostFooter() {
  return (
    <Wrap>
      <Text>조회수 1</Text>
      <Text>댓글 2</Text>
    </Wrap>
  );
}

const Wrap = styled.div`
  -webkit-box-align: center;
  position: relative;

  display: flex;
  align-items: center;

  height: 48px;

  padding: 0px 18px;

  font-size: 13px;

  color: rgb(153, 153, 153);

  background-color: white;

  span + span {
    position: relative;
    margin-left: 12px;
    &::before {
      content: "·";
      position: absolute;
      left: -10px;
      top: 0;
      font-weight: 600;
    }
  }
`;

const Text = styled.span`
  margin-right: 4px;
`;
