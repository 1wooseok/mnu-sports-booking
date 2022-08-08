import React, { useState } from "react";
import styled from "styled-components";
import ActivityHeader from "../components/Activity/ActivityHeader";
import ActivityTab from "../components/Activity/ActivityTab";
import MyCommentList from "../components/Activity/MyCommentList";
import MyPostList from "../components/Activity/MyPostList";
import MyBookingList from "../components/Activity/MyBookingList";

export default function ActivityPage() {
  const [currentTab, setCurrentTab] = useState<number>(0);

  const onClick = (tabNumber: number) => {
    setCurrentTab(tabNumber);
  };

  return (
    <>
      <ActivityHeader />
      <Wrap>
        <ActivityTab onClick={onClick} currentTab={currentTab} />
        {currentTab === 0 && <MyPostList />}
        {currentTab === 1 && <MyCommentList />}
        {currentTab === 2 && <MyBookingList />}
      </Wrap>
    </>
  );
}

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  flex: 1 1 0%;
`;
