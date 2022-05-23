import React, { useState } from "react";
import SearchUser from "./SearchUser";
import styled from "styled-components";
import CardContainer from "./CardContainer";
import { useNavigate } from "react-router-dom";
import AdminDatePicker from "./AdminDatePicker";
import { postAdminLogout } from "../../apis/api";

function AdminContainer() {
  const navigate = useNavigate();
  const [refetch, setRefetch] = useState(false);

  async function adminLogout() {
    if (!window.confirm("로그아웃 하시겠습니까?")) return;
    try {
      await postAdminLogout();
      alert("로그아웃 되었습니다.");
      navigate("/admin/login", { replace: true });
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <StAdminContainer>
      <StHeader>
        관리자<StLogout onClick={adminLogout}>로그아웃</StLogout>
      </StHeader>
      <SearchUser />
      <AdminDatePicker />
      <StAllBtn onClick={() => setRefetch((prev) => !prev)}>전체보기</StAllBtn>
      <CardContainer refetch={refetch} />
    </StAdminContainer>
  );
}

const StAdminContainer = styled.div`
  width: 100vw;
  min-height: 90vh;
  max-height: 90vh;
  text-align: center;
`;

const StHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 80vw;
  margin: 0.5rem auto;
  text-align: center;
  font-weight: bold;
  font-size: 30px;
`;

const StLogout = styled.span`
  font-size: 15px;
  opacity: 0.5;
  &:hover {
    opacity: 1;
  }
`;

const StAllBtn = styled.div`
  width: 5rem;
  margin: 0 auto;
  border: 1px solid black;

  border-radius: 2px;
`;
export default AdminContainer;
