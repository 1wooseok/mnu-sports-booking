import React from "react";
import styled from "styled-components";
import {KAKAO_CHANNEL_URL} from "../kakao-api";

function KakaoChannel() {
  return (
    <KakaoChatMob href={KAKAO_CHANNEL_URL} target="_blank">
      <img src="/asset/images/KAKAO_CHANNEL.png" width="30px" height="30px" alt="kakao+" />
    </KakaoChatMob>
  );
}

export default KakaoChannel;

const KakaoChatMob = styled.a`
  z-index: 2;
  margin-left: 0.5em;
`;
