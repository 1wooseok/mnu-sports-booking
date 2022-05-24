import React from "react";
import styled from "styled-components";
import { getMyBooking, deleteMyBooking } from "../../apis/api";
import { checkIdFormat, checkPasswordFormat } from "../../utils/check";

// 조회시 사용되는 form
export function SnumForm({ onChange, snum }) {
  function handleSubmit(e) {
    e.preventDefault();
    console.log({ snum });
    if (!checkIdFormat(snum)) return alert("학번을 확인해주세요.");
    getMyBookingList({ snum });
  }

  return (
    <form onSubmit={handleSubmit}>
      <StInput
        onChange={onChange}
        name="snum"
        snum={snum}
        placeholder="학번을 입력하세요."
        autoFocus
      />
    </form>
  );
}

export function SpwForm({ onChange, snum, spw }) {
  function handleSubmit(e) {
    e.preventDefault();
    if (!checkPasswordFormat(spw)) return alert("비밀번호를 확인해주세요.");
    // cancelMyBooking({ bno, snum, spw });
  }
  return (
    <form onSubmit={handleSubmit}>
      <StInput
        onChange={onChange}
        name="spw"
        spw={spw}
        placeholder="비밀번호를 입력하세요."
        autoFocus
      />
    </form>
  );
}

async function getMyBookingList(snum) {
  try {
    const res = await getMyBooking({ snum });
    return res.data;
  } catch (err) {
    console.log(`${err} - 내 예약목록 받아올떄 에러 `);
  }
}

// data: { bno, snum, spw }
async function cancelMyBooking(data) {
  try {
    const res = await deleteMyBooking(data);
    return res.data;
  } catch (err) {
    console.log(`${err} - 내 예약 취소할때 에러 `);
  }
}

const StInput = styled.input`
  min-width: 7rem;
  max-width: 8.5rem;

  padding: 0 1rem;

  border: none;
  outline: none;
`;
