import React from "react";
import styled from "styled-components";
import PostHeader from "../components/post/PostHeader";
import PostInfo from "../components/post/PostInfo";
import PostContent from "../components/post/PostContent";
import PostFooter from "../components/post/PostFooter";
import Comment from "../components/post/Comment";
import CommentInput from "../components/post/CommentInput";

export default function PostPage() {
  return (
    <Wrap>
      <PostHeader />
      <PostInfo />
      <PostContent />
      <PostFooter />
      <Comment />
      <CommentInput />
      {/* <ScrollTopButton /> */}
    </Wrap>
  );
}

const Wrap = styled.div`
  height: 92vh;
  overflow-y: auto;
`;
