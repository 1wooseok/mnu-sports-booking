import React from "react";
import styled from "styled-components";
import CommentModel from "../../types/Comment";

interface PostFooterProps {
  viewCount: number;
  comments: CommentModel[];
}

export default function PostFooter({ viewCount, comments }: PostFooterProps) {
  return (
    <Wrap>
      <Text>조회수 {viewCount}</Text>
      <Text>댓글 {comments.length}</Text>
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
