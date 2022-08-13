import axios from "axios";
import React, { useEffect } from "react";
import { useNavigate } from "../hook/useNavigate";

type KakaoAuthCode = null | string;

export default function KakaoRedirectPage() {
  const navigate = useNavigate();

  let code: KakaoAuthCode = null;

  useEffect(() => {
    code = new URL(window.location.href).searchParams.get("code");
    alert(JSON.stringify(code));
    // (async () => await getAccessToken(code))();
  }, []);

  useEffect(() => {
    // Server로부터 Token 받아서 localStorage든 어디든 저장.
    // 토큰이 나오면 로그인된 상태임.
    // 전역상태를 로그인으로 변경
    navigate("/", { replace: true });
    // 이전 화면으로
  }, []);

  return <div>Kakao 로그인중...</div>;
}

function getAccessToken(code: KakaoAuthCode) {
  return axios({
    method: "GET",
    url: `/oauth/callback/kakao?code=${code}`,
  });
}
