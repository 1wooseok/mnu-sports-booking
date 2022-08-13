import React from "react";
import styled from "styled-components";
import { Tag } from "../../style/CommonStyle";

interface PostContentProps {
  category: string;
  title: string;
  content: string;
  images: string[];
}

export default function PostContent({
  category,
  title,
  content,
  images,
}: PostContentProps) {
  return (
    <Wrap>
      <Tag>{category}</Tag>
      <Head>{title}</Head>
      <Content>{content}</Content>
      {images.length > 0 && (
        <ImageList>
          <ImageWrap>
            <Image />
          </ImageWrap>
        </ImageList>
      )}
    </Wrap>
  );
}

const Wrap = styled.div`
  padding: 8px 18px 10px;
  overflow-x: hidden;
  background-color: white;
`;

const Head = styled.h1`
  margin: 12px 0px 0px;
  font-size: 18px;
  color: rgb(31, 31, 31);
  line-height: 26px;
`;

const Content = styled.p`
  margin: 24px 0px 0px;
  font-size: 16px;
  color: rgb(51, 51, 51);
  line-height: 24px;
  word-break: break-all;
  white-space: pre-wrap;
`;

const ImageList = styled.ul`
  margin: 32px 0px 0px -18px;
  width: calc(100% + 36px);
`;

const ImageWrap = styled.li`
  height: 100%;
  width: 100%;
`;

const Image = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
`;
