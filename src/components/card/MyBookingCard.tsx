import React from "react";
import styled from "styled-components";
import { Tag } from "../../style/CommonStyle";

export default function MyBookingCard() {
  return (
    <Wrap>
      <Tag>풋살</Tag>
      <Body>
        <h2>공대풋살장</h2>
        <h3>
          <p>22/08/12(목)</p>
          <span>|</span>
          <span>09:00 ~ 11:00</span>
        </h3>
      </Body>
      <Footer>
        <button>예약 변경</button>
        <button>예약 취소</button>
      </Footer>
    </Wrap>
  );
}

const Wrap = styled.li`
  height: 160px;
  max-height: 160px;

  margin-top: 8px;
  padding: 15px 18px;

  background-color: rgb(255, 255, 255);
  box-shadow: rgb(245 246 247) 0px -8px;

  word-break: break-all;

  h2 {
    font-size: 16px;
    font-weight: 500;
    margin: 5px 0 5px 0;
  }

  h3 {
    font-size: 14px;
    font-weight: 400;
    color: rgb(103, 103, 103);
    margin: 0;
  }

  p {
    display: inline-block;
  }

  span {
    color: rgb(153, 153, 153);
    padding-left: 10px;
  }
`;

const Body = styled.div`
  border-bottom: 1px solid rgb(245, 246, 247);
  padding-bottom: 10px;
`;

const Footer = styled.div`
  display: flex;
  align-items: center;

  width: 100%;
  margin-top: 10px;

  button {
    padding: 5px 15px;
    margin-right: 10px;
    border: 1px solid rgb(225, 226, 227);
  }
`;
