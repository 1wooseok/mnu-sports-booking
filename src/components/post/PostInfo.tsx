import React from "react";
import styled from "styled-components";

interface PostTitelPrpos {
  avatar: string;
  userName: string;
  date: string;
}

export default function PostInfo() {
  return (
    <Wrap>
      <Avatar />
      <Name>석우정</Name>
      <Date>2022년 08월 10일</Date>
    </Wrap>
  );
}

const Wrap = styled.div`
  display: flex;
  align-items: center;
  -webkit-box-align: center;

  height: 60px;
  padding: 0px 18px;

  background-color: white;
`;

const Avatar = styled.div`
  width: 32px;
  height: 32px;

  margin-right: 8px;

  border-radius: 10px;
  background-color: skyblue;
`;

const Name = styled.div`
  display: flex;

  font-size: 14px;
  font-weight: 500;

  color: black;
`;

const Date = styled.p`
  flex: 1 1 0%;
  text-align: right;
  font-size: 13px;
  font-weight: 400;
  color: rgb(170, 170, 170);
`;
