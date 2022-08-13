import React from "react";
import styled from "styled-components";
import { FiArrowRight } from "react-icons/fi";
import { flexCenter } from "../../style/LayoutStyle";

export default function CommentInput() {
  const onSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
  };

  return (
    <Form onSubmit={onSubmit}>
      <Positioner>
        <TextArea placeholder="댓글을 작성하세요." />
        <Submit>
          <FiArrowRight />
        </Submit>
      </Positioner>
    </Form>
  );
}

const Form = styled.form`
  position: fixed;
  left: 0;
  bottom: 0;

  display: flex;
  align-items: center;

  width: 100%;
  height: 60px;

  padding: 0px 18px;

  border-top: 1px solid rgb(245, 246, 247);

  background-color: white;

  z-index: 10;

  transition: height 0.3s ease-out 0s;
`;

const Positioner = styled.div`
  position: relative;
  left: 0;
  bottom: 0;
`;

// TextArea은 줄바꿈이 안됨
const TextArea = styled.textarea`
  display: flex;
  align-items: center;

  width: 90vw;
  height: 2.2rem;

  font-size: 14px;

  padding: 7px 35px 5px 15px;

  border-radius: 15px;

  background-color: rgb(245, 246, 247);
`;

const Submit = styled.button`
  ${flexCenter}

  position: absolute;
  bottom: 0.6em;
  right: 0.7em;

  background-color: rgb(245, 246, 247);

  svg {
    width: 18px;
    height: 18px;
  }
`;
