import React from "react";
import styled from "styled-components";
import CardHeader from "./CardHeader";
import CardBody from "./CardBody";
import CardFooter from "./CardFooter";
import { Link } from "react-router-dom";

// 이해가 안됨.
export default function Card({ post }: any) {
  return (
    <Wrap>
      <Link to={`/community/${post.postId}`}>
        <CardHeader
          userName={post.userName}
          date={post.date}
          avatar={post.avatar}
        />
        <CardBody
          title={post.title}
          content={post.content}
          image={post.image}
        />
        <CardFooter commentCount={post.commentCount} />
      </Link>
    </Wrap>
  );
}

const Wrap = styled.li`
  width: 100vw;
  height: 200px;
  max-width: 500px;

  margin-top: 8px;
  padding: 16px 18px;

  background-color: rgb(255, 255, 255);
`;
