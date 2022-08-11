import React from "react";
import Skeleton from "react-loading-skeleton";
import styled from "styled-components";

export default function CommunitySuspense() {
  return (
    <Fallback>
      <Head>
        <Skeleton height={30} width={30} />
        <Skeleton height={30} width={30} />
        <Skeleton height={30} width={30} />
        <Skeleton height={30} width={30} />
        <Skeleton height={30} width={30} />
      </Head>
      <Body>
        {Array.from({ length: 3 }).map((_, idx) => (
          <Article key={idx}>
            <ArticleTop>
              <Skeleton circle height={22} width={22} />
              <Skeleton height={22} width={67} />
              <Skeleton
                height={22}
                width={67}
                style={{ position: "absolute", right: 0 }}
              />
            </ArticleTop>
            <ArticleMid>
              <FlexColumn>
                <Skeleton height={22} width={122} />
                <Skeleton
                  height={22}
                  width={220}
                  style={{ marginTop: "12px" }}
                />
              </FlexColumn>
              <Skeleton height={80} width={80} />
            </ArticleMid>
            <ArticleBottom>
              <Skeleton height={22} width={32} />
            </ArticleBottom>
          </Article>
        ))}
      </Body>
      <Bottom>
        <Skeleton height={28} width={28} />
        <Skeleton height={28} width={28} />
        <Skeleton height={28} width={28} />
        <Skeleton height={28} width={28} />
      </Bottom>
    </Fallback>
  );
}

const Fallback = styled.div`
  positio: fiexd;
  top: 0;
  left: 0;

  display: flex;
  flex-direction: column;

  width: 100vw;
  height: 100vh;
  background-color: rgb(245, 246, 247);

  z-index: 19999;

  span {
    display: inline-block;
    border-radius: 3px;
    background-color: rgb(245, 246, 247);
    margin-right: 10px;
  }
`;

const Body = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  background-color: white;
  overflow: hidden;
`;

const Head = styled.div`
  display: flex;
  align-items: center;
  height: 60px;
  padding: 0 20px;
  background-color: white;
  box-shadow: rgb(235 235 235) 0px -0.1px 0px 0px inset;
`;

const Article = styled.div`
  padding: 20px;
  border-top: 8px solid rgb(245, 246, 247);
  box-shadow: inset 0 -1px 0 0 rgb(245, 246, 247);
`;

const ArticleTop = styled.div`
  position: relative;
  display: flex;
`;

const ArticleMid = styled.div`
  display: flex;
  padding: 16px 0;
`;

const FlexColumn = styled.div`
  display: flex;
  flex-direction: column;
`;

const ArticleBottom = styled.div`
  display: flex;
`;

const Bottom = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 60px;
  min-height: 60px;
  background-color: white;
  box-shadow: inset 0 1px 0 0 rgb(245, 246, 247);
`;
