import React, { useEffect, useState } from "react";
import styled from "styled-components";
import PostHeader from "../components/post/PostHeader";
import PostInfo from "../components/post/PostInfo";
import PostContent from "../components/post/PostContent";
import PostFooter from "../components/post/PostFooter";
import Comment from "../components/post/Comment";
import CommentInput from "../components/post/CommentInput";
import { useParams } from "react-router-dom";
import CommunitySuspense from "../components/suspense/CommunitySuspense";
import PostModel from "../types/Post";
import api from "../apis/core/config";

export default function PostPage() {
  const { postId } = useParams<{ postId: string }>();
  const [post, setPost] = useState<PostModel | null>(null);

  useEffect(() => {
    (async () => {
      const res: any = await api.get(`/cart/${postId}/items`);
      setPost(res[0]); // res: [{...}]
    })();
  }, []);

  if (!post) return <CommunitySuspense />;

  return (
    <Wrap>
      <PostHeader />
      <PostInfo
        avatar={post.avatar}
        userName={post.userName}
        date={post.date}
      />
      <PostContent
        category={post.category}
        title={post.title}
        content={post.content}
        images={post.images}
      />
      <PostFooter viewCount={post.viewCount} comments={post.comments} />
      <Comment comments={post.comments} />
      <CommentInput />
    </Wrap>
  );
}

const Wrap = styled.div`
  height: 92vh;
  overflow-y: auto;
`;
