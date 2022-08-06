import React, { useState, useCallback } from "react";
import styled from "styled-components";
import { flexCenter } from "../../style/LayoutStyle";
import { BsArrowRightSquareFill } from "react-icons/bs";
import { IoIosArrowDown } from "react-icons/io";

const PlaceMenu = ["풋살", "농구", "족구", "테니스"];

export default function CommunityHeader() {
  const [active, setActive] = useState<number>(0);

  const onClick = useCallback(
    (idx: number) => {
      setActive(idx);
    },
    [active]
  );

  return (
    <Wrap>
      <Deco>
        <IoIosArrowDown />
      </Deco>
      <Ul>
        {PlaceMenu.map((place, idx) => (
          <Place
            key={idx}
            className={active === idx ? "active" : ""}
            onClick={() => onClick(idx)}
          >
            {place}
          </Place>
        ))}
      </Ul>
    </Wrap>
  );
}

const Wrap = styled.div`
  ${flexCenter};
  svg {
    color: white;
    width: 12px;
    height: 12px;
  }
`;

const Ul = styled.ul`
  ${flexCenter};
`;

const Place = styled.li`
  font-size: 18px;

  font-weight: 600;

  margin-left: 0.6rem;

  color: ${(props) =>
    props.className === "active" ? "black" : "rgb(191, 191, 191)"};

  word-break: keep-all;

  white-space: nowrap;
`;

const Deco = styled.div`
  ${flexCenter};
  width: 16px;
  height: 16px;
  border-radius: 5px;
  background-color: mediumseagreen;
`;
