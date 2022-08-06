import React from "react";
import Header from "../layout/header/Header";
import BackButton from "../button/BackButton";
import { RiAlarmWarningLine } from "react-icons/ri";

export default function PostHeader() {
  return (
    <Header>
      <BackButton />
      <RiAlarmWarningLine />
    </Header>
  );
}
