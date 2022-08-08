import React, { useState, useCallback } from "react";
import styled from "styled-components";
import { BsCalendarDate } from "react-icons/bs";
import { AiOutlineUser } from "react-icons/ai";
import { IoChatboxOutline } from "react-icons/io5";
import { MdAttachFile } from "react-icons/md";
import IconButton from "../../button/IconButton";

import { useNavigate } from "../../../hook/useNavigate";

// 이게 뭔 문법인지 잘 모르겠음
type MenuTableType = {
  [index: string]: string;
};

const MenuTable: MenuTableType = {
  예약: "/booking/1",
  커뮤니티: "/community",
  밴드: "/band",
  프로필: "/profile",
} as const;

type MENUS = typeof MenuTable[keyof typeof MenuTable];

function Footer() {
  const navigate = useNavigate();

  const onClick = useCallback(
    (title: MENUS, loginRequired: boolean = false) => {
      if (loginRequired) {
      }
      navigate(MenuTable[title]);
    },
    []
  );

  return (
    <Wrap>
      <MenuList>
        <IconButton
          title="예약"
          size="small"
          icon={<BsCalendarDate />}
          onClick={() => onClick("예약")}
        />
        <IconButton
          title="커뮤니티"
          size="small"
          icon={<IoChatboxOutline />}
          onClick={() => onClick("커뮤니티")}
        />
        <IconButton
          title="밴드"
          size="small"
          icon={<MdAttachFile />}
          onClick={() => onClick("밴드")}
        />
        <IconButton
          title="프로필"
          size="small"
          icon={<AiOutlineUser />}
          onClick={() => onClick("프로필")}
        />
      </MenuList>
    </Wrap>
  );
}

const Wrap = styled.nav`
  position: fixed;
  left: 0;
  bottom: 0;

  width: 100vw;
  height: 60px;

  background-color: white;

  box-shadow: rgb(235 235 235) 0px 1px 0px 0px inset;
`;

const MenuList = styled.ul`
  height: 60px;

  display: flex;
  align-items: center;
  justify-content: space-around;
`;

export default Footer;
