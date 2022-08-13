import React from "react";
import styled from "styled-components";
import { MdOutlineArticle } from "react-icons/md";

export default function MyCommentCard() {
  return (
    <Wrap>
      <h2>
        <MdOutlineArticle />
        오늘 축구할사람
      </h2>
      <h3>허허허</h3>
      <div>8월 20일</div>
    </Wrap>
  );
}

const Wrap = styled.li`
  height: 140px;
  max-height: 140px;

  margin-top: 8px;
  padding: 15px 18px;

  background-color: rgb(255, 255, 255);
  box-shadow: rgb(245 246 247) 0px -8px;

  word-break: break-all;

  h2 {
    display: flex;
    align-items: center;

    font-size: 16px;
    font-weight: 400;
    line-height: 1.38;
    color: rgb(153, 153, 153);
  }

  h3 {
    display: flex;
    align-items: center;

    color: rgb(51, 51, 51);

    line-height: 1.14;
    margin: 10px 0px 0px;
    font-size: 14px;
    letter-spacing: -0.25px;
    word-break: break-all;
  }

  div {
    margin: 14px 0px 0px;
    font-size: 12px;
    line-height: 1.67;
    color: rgb(153, 153, 153);
  }

  svg {
    margin-right: 4px;
  }
`;
