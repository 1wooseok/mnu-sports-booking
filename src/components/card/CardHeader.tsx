import React from "react";
import styled from "styled-components";

interface CardHeaderProps {
  avatar?: string;
  userName: string;
  date: string;
}

export default function CardHeader({
  avatar,
  userName,
  date,
}: CardHeaderProps) {
  return (
    <Wrap>
      <UserAvatar></UserAvatar>
      <UserName>{userName}</UserName>
      <PostDate>{date}</PostDate>
    </Wrap>
  );
}

const Wrap = styled.div`
  display: flex;
  align-items: center;
  -webkit-box-align: center;

  height: 24px;
`;

const UserAvatar = styled.div`
  width: 24px;
  height: 24px;

  margin-right: 8px;

  border-radius: 8px;

  background-color: skyblue;
`;

const UserName = styled.div`
  display: flex;
  font-weight: 500;
`;

const PostDate = styled.div`
  flex: 1 1 0%;

  text-align: right;

  font-size: 13px;
  font-weight: 400;

  color: rgb(170, 170, 170);
`;
