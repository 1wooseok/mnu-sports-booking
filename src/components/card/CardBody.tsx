import React from "react";
import styled from "styled-components";

export default function CardBody() {
  return (
    <Wrap>
      <Main>
        <Title>15 - 17시 풋살할분~!!!!!!!!!!!!</Title>
        <Content>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique,
          repudiandae delectus. Esse fugiat ducimus inventore aliquam deleniti
          dolorem odit porro dolor, nam culpa, accusantium eveniet distinctio
          placeat atque, vitae architecto!
        </Content>
      </Main>
      <Img />
    </Wrap>
  );
}

const Wrap = styled.div`
  display: flex;
  padding: 16px 0px;
`;

const Main = styled.div`
  flex: 1 1 0%;
  width: 100%;
  word-break: break-all;

  font-size: ;
`;

const Title = styled.p`
  font-size: 17px;
  font-weight: 500;
  line-height: 24px;
  color: rgb(31, 31, 31);
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

const Content = styled.div`
  margin-top: 8px;
  font-size: 14px;
  line-height: 20px;
  color: rgb(153, 153, 153);
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
`;

const Img = styled.img`
  width: 4.5rem;
  height: 4.5rem;

  object-fit: cover;
  object-position: center top;
  margin-left: 16px;
`;
