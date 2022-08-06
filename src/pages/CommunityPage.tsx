import React from "react";
import styled from "styled-components";
import Card from "../components/card/Card";
import Header from "../components/layout/header/Header";
import CommunityHeader from "../../src/components/community/CommunityHeader";

export default function CommunityPage() {
  return (
    <>
      <Header>
        <CommunityHeader />
      </Header>
      <CardList>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </CardList>
    </>
  );
}

const CardList = styled.ul`
  height: 82vh;
  overflow: auto;
`;
