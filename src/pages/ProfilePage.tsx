import React, { useCallback } from "react";
import styled from "styled-components";
import IconButton from "../components/button/IconButton";
import { useNavigate } from "../hook/useNavigate";
import { ImFileEmpty } from "react-icons/im";
import { BsCalendarPlus } from "react-icons/bs";
import { GoCommentDiscussion } from "react-icons/go";
import Header from "../components/layout/header/Header";

type SubMenuTableType = {
  [index: string]: string;
};

const SubMenuTable: SubMenuTableType = {
  게시글: "profile/post",
  댓글: "profile/comment",
  내예약: "profile/myBooking",
} as const;

type SUBMENUS = typeof SubMenuTable[keyof typeof SubMenuTable];

export default function ProfilePage() {
  const navigate = useNavigate();

  const onClick = useCallback((title: SUBMENUS) => {
    navigate(SubMenuTable[title]);
  }, []);

  return (
    <>
      <Header>
        <h2>프로필</h2>
      </Header>
      <Wrap>
        <ProfileAvatar />
        <h3>석우정</h3>
        <h4>주포지션: 골키퍼</h4>
        <a>프로필 수정하기</a>
        <BtnWrap>
          <IconButton
            size="large"
            icon={<ImFileEmpty />}
            title="게시글"
            onClick={() => onClick("게시글")}
          />
          <IconButton
            size="large"
            icon={<GoCommentDiscussion />}
            title="댓글"
            onClick={() => onClick("댓글")}
          />
          <IconButton
            size="large"
            icon={<BsCalendarPlus />}
            title="내예약"
            onClick={() => onClick("내예약")}
          />
        </BtnWrap>
        <ul>
          <li>이용약관 &gt;</li>
        </ul>
      </Wrap>
    </>
  );
}

const Wrap = styled.div`
  height: 100vh;

  padding: 20px;

  text-align: center;

  background-color: white;

  a {
    display: inline-block;

    padding: 12px 28px;
    margin: 12px 0px 0px;

    font-size: 15px;
    color: mediumseagreen;
  }

  h3 {
    margin: 12px 0px 0px;
    font-size: 17px;
    font-weight: 500;
    color: rgb(34, 34, 34);
  }

  h4 {
    margin: 8px 0px 0px;

    font-size: 14px;
    font-weight: 500;

    color: rgb(119, 119, 119);
  }
`;

const ProfileAvatar = styled.div`
  width: 65px;
  height: 65px;

  margin: 0 auto;

  border-radius: 15px;

  background-color: skyblue;
`;

const BtnWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;

  height: 5rem;

  margin: 1rem 0;

  border: 1px solid whitesmoke;
`;
