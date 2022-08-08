import React, { useState, useEffect } from "react";
import Card from "../components/card/Card";
import { CardList } from "../style/LayoutStyle";
import Header from "../components/layout/header/Header";
import CommunityHeader from "../components/community/CommunityHeader";

import axios from "axios";

export interface CardProps {
  postId: number;
  avatar?: string;
  userName: string;
  date: string;
  title: string;
  content: string;
  image: string;
  commentCount: number;
  category: string;
}

export default function CommunityPage() {
  const [posts, setPosts] = useState<CardProps[] | null>(null);

  useEffect(() => {
    (async () => {
      const { data } = await axios.get("http://localhost:3001/posts");
      setPosts(data);
    })();
  }, []);

  if (!posts) return <h1>로딩중...</h1>;

  return (
    <>
      <Header>
        <CommunityHeader />
      </Header>
      <CardList>
        {posts.map((post) => (
          <Card key={post.postId} post={post} />
        ))}
      </CardList>
    </>
  );
}
