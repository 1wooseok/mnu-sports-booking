import React from "react";
import styled from "styled-components";
import { flexCenter } from "../../style/LayoutStyle";
import { useSetModal } from "../../context/modalContext";

interface CenterModalProps {
  message: string;
  ok: string;
  cancel: string;
  onClick?: () => void;
}

export default function YesOrNo() {
  const setModal = useSetModal();

  return (
    <Wrap>
      <Message>정말 삭제하시겠습니까?</Message>
      <BtnWrap>
        <Button onClick={() => setModal(null)}>취소</Button>
        <Button className="del">삭제</Button>
      </BtnWrap>
    </Wrap>
  );
}

const Wrap = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;

  transform: translate(-50%, -45%);

  display: flex;
  flex-direction: column;

  width: 70vw;
  max-width: 400px;
  height: 150px;

  font-weight: 500;

  border-radius: 10px;

  background-color: white;

  z-index: 10001;
`;

const Message = styled.div`
  ${flexCenter}
  flex: 2;
  width: 100%;

  box-shadow: rgb(235 235 235) 0px -0.5px 0px 0px inset;
`;

const BtnWrap = styled.div`
  ${flexCenter}
  justify-content: space-between;
  flex: 1;

  width: 100%;
  height: 50px;
  border-radius: 10px;
`;

const Button = styled.button`
  width: 50%;
  height: 100%;
  border-radius: 10px;
  font-size: 16px;
  font-weight: 500;
  color: ${(props) => (props.className === "del" ? "mediumseagreen" : "black")};
`;
