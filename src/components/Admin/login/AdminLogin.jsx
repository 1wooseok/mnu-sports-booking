import axios from "axios";
import React, { useRef } from "react";
import { useNavigate, Link } from "react-router-dom";
import styled from "styled-components";

export default function AdminLogin() {
  const navigate = useNavigate();
  const aid = useRef("");
  const pw = useRef("");

  function handleSubmit(e) {
    e.preventDefault();
    const data = {
      aid: aid.current.value,
      pw: pw.current.value,
    };
    requestAdminLogin(data);
  }

  async function requestAdminLogin(data) {
    try {
      const response = await axios.post("/admin/login", data);
      if (response.status === 201) {
        return navigate("/admin/manage", { replace: true });
      }
    } catch (err) {
      if (err.response.status === 404) {
        alert("입력을 확인해 주세요.");
        reset();
      }
    }
  }

  function reset() {
    aid.current.value = "";
    pw.current.value = "";
  }

  return (
    <>
      <h2>관리자 로그인</h2>

      <FORM onSubmit={handleSubmit}>
        <input name="aid" ref={aid} placeholder="id" />
        <input type="password" name="setPw" ref={pw} placeholder="pw" />
        <button>login</button>
      </FORM>
      <Link to="/admin/signup">회원가입</Link>
    </>
  );
}

const FORM = styled.form`
  display: flex;
  flex-direction: column;
`;
