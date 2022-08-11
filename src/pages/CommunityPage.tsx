import React, { useState, useEffect, Suspense } from "react";
import Card from "../components/card/Card";
import { CardList } from "../style/LayoutStyle";
import Header from "../components/layout/header/Header";
import CommunityHeader from "../components/community/CommunityHeader";
import CommunityCardModel from "../types/Community";
import CommunitySuspense from "../components/suspense/CommunitySuspense";
import { TimePickerLoader } from "../components/modal/loading";
import axios from "axios";

export default function CommunityPage() {
  const [posts, setPosts] = useState<CommunityCardModel[] | null>(null);

  useEffect(() => {
    (async () => {
      const { data } = await axios.get("http://localhost:3001/posts");
      setPosts(data);
    })();
  }, []);

  if (!posts) return <CommunitySuspense />;

  return (
    <Suspense fallback={<CommunitySuspense />}>
      <Header>
        <CommunityHeader />
      </Header>
      <CardList>
        {posts.map((post) => (
          <Card key={post.postId} post={post} />
        ))}
      </CardList>
    </Suspense>
  );
}
