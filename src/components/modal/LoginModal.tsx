import React from "react";
import styled from "styled-components";
import { flexCenter } from "../../style/LayoutStyle";
import { CgClose } from "react-icons/cg";
import { KAKAO_AUTH_URL } from "../../kakao-api";
import { useSetModal } from "../../context/modalContext";

export default function LoginModal() {
  const setModal = useSetModal();

  return (
    <Wrap>
      <Header>
        <CgClose onClick={() => setModal(null)} />
      </Header>
      <Content>
        <h2>
          간편하게 로그인하고 <br />
          팀원들을 모집해 보세요.
        </h2>
        <Ul>
          <a href={KAKAO_AUTH_URL}>
            <Kakao></Kakao>
          </a>
          <Naver></Naver>
        </Ul>
        <p>
          <a>서비스 이용약관</a>
          <a>개인정보 처리방침</a>
        </p>
      </Content>
    </Wrap>
  );
}

const Wrap = styled.div`
  position: fixed;

  top: 50%;
  left: 50%;

  width: 350px;
  height: 300px;

  transform: translateX(-50%) translateY(-50%);

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
  ${flexCenter};
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
