import React from "react";
import Header from "../layout/header/Header";
import BackButton from "../button/BackButton";

export default function ActivityHeader() {
  return (
    <Header>
      <BackButton />
      <h2>내 활동</h2>
    </Header>
  );
}
