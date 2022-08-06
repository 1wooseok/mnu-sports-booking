import React from "react";
import styled from "styled-components";
import Card from "../components/card/Card";

export default function CommunityPage() {
  return (
    <CardList>
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </CardList>
  );
}

const CardList = styled.ul`
  height: 82vh;
  overflow: auto;
`;
