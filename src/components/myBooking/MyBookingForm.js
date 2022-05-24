import React, { useState } from "react";
import styled from "styled-components";
import { BiArrowBack } from "react-icons/bi";
import { RiDeleteBack2Line } from "react-icons/ri";
import { getMyBooking, deleteMyBooking } from "../../apis/api";
import { checkIdFormat, checkPasswordFormat } from "../../utils/check";

// 조회시 사용되는 form
export function SnumForm({ inputState, setInputState, setViewState, setData }) {
  const { snum } = inputState;

  async function handleSubmit(e) {
    e.preventDefault();
    if (!checkIdFormat(snum)) return alert("학번을 확인해주세요.");
    setViewState((prev) => {
      return {
        ...prev,
        loading: true,
        idForm: false,
        e,
      };
    });
    try {
      const res = await getMyBooking({ snum: Number(snum) });
      setData(res.data);
      setViewState((prev) => ({
        ...prev,
        loading: false,
        listViewer: true,
      }));
    } catch (err) {
      throw new Error(alert('데이터를 받아오는데 실패했습니다. 새로고침해주세요.'));
    }
    setViewState((prev) => ({
      ...prev,
      loading: false,
    }));
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setInputState({
      ...inputState,
      [name]: value,
    });
  }

  return (
    <form onSubmit={handleSubmit}>
      <StInput
        onChange={handleChange}
        name="snum"
        snum={snum}
        placeholder="학번을 입력하세요."
        autoFocus
      />
    </form>
  );
}

export function SpwForm({ bno, snum, spw, setSpw, setData }) {
  const [pwForm, setPwForm] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    if (!checkPasswordFormat(spw)) return alert("비밀번호를 확인해주세요.");
    const testData = {
      bno: Number(bno),
      snum: Number(snum),
      spw,
    };
    try {
      const res = await deleteMyBooking(testData);
      if (res.status === 202) {
        return alert(res.data);
      }
      if (res.status === 204) {
        alert("취소되었습니다.");
        setPwForm(false);
        setData(prev => prev.filter(booking => booking.bno !== bno));
      }
    } catch (err) {
      throw new Error(alert('예약을 취소하는데 실패했습니다. 새로고침후 다시 시도해주세요.'));
    }
  }

  function handleChange(e) {
    setSpw(e.target.value);
  }

  return (
    <>
      <StXbtnWrap onClick={() => setPwForm(true)} >
        <RiDeleteBack2Line />
      </StXbtnWrap>
      {pwForm && (
        <StFormWrap>
          <BiArrowBack onClick={() => setPwForm(false)} />
          <form onSubmit={handleSubmit}>
            <StPwInput
              type="password"
              onChange={handleChange}
              name="spw"
              spw={spw}
              placeholder="암호를 입력하세요."
              autoFocus
            />
          </form>
        </StFormWrap>
      )}
    </>
  );
}

const StInput = styled.input`
  position: relative;
  top: 0;

  z-index: 3;

  min-width: 7rem;
  max-width: 8.5rem;

  padding: 0 1rem;

  border: none;
  outline: none;
`;

const StPwInput = styled.input`
  position: relative;
  top: 0;
  z-index: 3;
  padding: 0 0 0 1.5rem;
  border: none;
  outline: none;
  margin: 0 auto;
  width: 100%;
  text-align: center;
`;

const StFormWrap = styled.div`
  position: absolute;
  width: 14em;

  display: flex;
  align-items: center;

  background-color: white;
`;

const StXbtnWrap = styled.div`
  display: flex;
  align-items: center;
`;
