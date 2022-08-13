import React from "react";
import { CardList } from "../../style/LayoutStyle";
import MyCommentCard from "../card/MyCommentCard";

interface MyCommentProps {
  title: string;
  content: string;
  category: string;
  date: string;
}

export default function MyCommentList() {
  return (
    <CardList>
      <MyCommentCard />
      <MyCommentCard />
      <MyCommentCard />
      <MyCommentCard />
    </CardList>
  );
}
