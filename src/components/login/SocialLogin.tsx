import React from "react";
import styled from "styled-components";
import { CgClose } from "react-icons/cg";

export default function SocialLogin() {
  return (
    <Box>
      <Header>
        <CgClose />
      </Header>
      <Content>
        <h2>
          간편하게 로그인하고 <br />
          팀원들을 모집해 보세요.
        </h2>
        <Ul>
          <Kakao></Kakao>
          <Naver></Naver>
        </Ul>
        <p>
          <a>서비스 이용약관</a>
          <a>개인정보 처리방침</a>
        </p>
      </Content>
    </Box>
  );
}

const Box = styled.div`
  position: fixed;

  top: 45%;
  left: 45%;

  width: 400px;
  height: 280px;

  transform: translateX(-30%) translateY(-30%);

  overflow: hidden;

  background-color: white;

  z-index: 10001;

  a {
    display: inline-block;
    margin: 0 10px;
  }
`;

const Header = styled.div`
  padding: 15px 0 0 20px;
  font-size: 24px;
`;

const Content = styled.div`
  padding: 10px 24px 36px;
  text-align: center;
`;

const Ul = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Kakao = styled.li`
  width: 45px;
  height: 45px;
  border-radius: 15px;
  background-color: rgb(255, 224, 72);
  margin: 20px 15px;
`;

const Naver = styled.li`
  width: 45px;
  height: 45px;
  border-radius: 15px;
  background-color: rgb(30, 200, 0);
  margin: 20px 15px;
`;
