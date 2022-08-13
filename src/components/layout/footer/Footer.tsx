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
  "/booking/1": "예약",
  "/community": "커뮤니티",
  "/band": "밴드",
  "/profile": "프로필",
} as const;

type MENUS = typeof MenuTable[keyof typeof MenuTable];

function Footer() {
  const navigate = useNavigate();
  const { pathname } = location;
  const [currentTab, setCurrentTab] = useState<MENUS>(MenuTable[pathname]);

  const onClick = useCallback((path: MENUS, loginRequired: boolean = false) => {
    if (loginRequired) {
    }
    setCurrentTab(MenuTable[path]);
    navigate(path);
  }, []);

  return (
    <Wrap>
      <MenuList>
        <IconButton
          title="예약"
          size="small"
          icon={<BsCalendarDate />}
          onClick={() => onClick("/booking/1")}
          currentTab={currentTab}
        />
        <IconButton
          title="커뮤니티"
          size="small"
          icon={<IoChatboxOutline />}
          onClick={() => onClick("/community")}
          currentTab={currentTab}
        />
        <IconButton
          title="밴드"
          size="small"
          icon={<MdAttachFile />}
          onClick={() => onClick("/band")}
          currentTab={currentTab}
        />
        <IconButton
          title="프로필"
          size="small"
          icon={<AiOutlineUser />}
          onClick={() => onClick("/profile")}
          currentTab={currentTab}
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
