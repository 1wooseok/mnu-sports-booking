import React, { useState, useEffect, Suspense } from "react";
import Card from "../components/card/Card";
import { CardList } from "../style/LayoutStyle";
import Header from "../components/layout/header/Header";
import CommunityHeader from "../components/community/CommunityHeader";
import CommunityCardModel from "../types/Community";
import CommunitySuspense from "../components/suspense/CommunitySuspense";
import api from "../apis/core/config";

export default function CommunityPage() {
  const [posts, setPosts] = useState<CommunityCardModel[] | null>(null);

  useEffect(() => {
    (async () => {
      const res: any = await api.get("/posts");
      setPosts(res);
    })();
  }, []);

  if (!posts) return <CommunitySuspense />;

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
