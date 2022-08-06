import React from "react";
import styled from "styled-components";
import CardHeader from "./CardHeader";
import CardBody from "./CardBody";
import CardFooter from "./CardFooter";
import { useNavigate } from "../../hook/useNavigate";

interface CardProps {
  postId: number;
  avatar: string;
  userName: string;
  date: string;
  title: string;
  content: string;
  image: string;
  commentCount: number;
}

export default function Card() {
  const navigate = useNavigate();

  const onClick = () => {
    navigate("community/postId");
  };

  return (
    <Wrap onClick={onClick}>
      <CardHeader />
      <CardBody />
      <CardFooter />
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
