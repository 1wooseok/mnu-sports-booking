import React from "react";
import Card from "../components/card/Card";
import { CardList } from "../style/LayoutStyle";
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
