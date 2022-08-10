import React from "react";
import styled from "styled-components";
import { Tag } from "../../style/CommonStyle";

export default function PostContent() {
  const images = [];
  return (
    <Wrap>
      <Tag>풋살</Tag>
      <Head>오늘 축구할사람</Head>
      <Content>6시에 공대 풋살장에서 하실분?!</Content>
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
  background-color: red;
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
