import React, { useState } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import styled from "styled-components";
import Complete from "../modal/complete";
import { postReserve } from "../../apis/api";
import useInputChange from "../hook/useInputs";
import { fullDateFormatter, timeFormatter } from "../../utils/format";
import {
  checkIdFormat,
  checkNameFormat,
  checkMajorFormat,
} from "../../utils/check";
import "./login.css";
import {BiArrowBack} from 'react-icons/bi';

export default function Login() {
  const location = useLocation();
  const navigate = useNavigate();
  const [completeMsg, setCompleteMsg] = useState(null);
  const [{ smajor, sname, snum }, onChange] = useInputChange({
    smajor: "",
    sname: "",
    snum: "",
  });

  async function requestReserve(fno, userInput) {
    try {
      const res = await postReserve(fno, userInput);
      if (res.status === 201) {
        location.state = null;
        setCompleteMsg(<Complete data={res.data} fno={fno} />);
      }
      if (res.status === 202) {
        location.state = null;
        if (
          window.confirm(
            "이미 예약된 시간입니다. 다른 시간에 예약하시겠습니까?"
          )
        ) {
          navigate("/booking/27", { replace: true });
        }
      }
    } catch (err) {
      console.log(`${err} : 예약 신청할때 발생한 에러`);
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!checkMajorFormat(smajor)) return alert("옳바른 학과명 입력해 주세요.");
    if (!checkIdFormat(snum)) return alert("옳바른 학번을 입력해 주세요.");
    if (!checkNameFormat(sname)) return alert("이름을 확인해 주세요.");
    if (!location.state) return alert("날짜와 시간을 선택해주세요!");
    if (!location.state.fno) return alert("날짜와 시간을 선택해주세요!");
    if (!location.state.dateState) return alert("날짜를 선택해주세요!");
    if (!location.state.userPick) return alert("시간을 선택해주세요!");

    const { fno, dateState, userPick } = location.state;
    const userInput = {
      date: fullDateFormatter(dateState),
      maxHour: userPick.length,
      selectedTime: timeFormatter(userPick[0]),
      smajor: smajor,
      sname: sname,
      snum: Number(snum),
    };
    requestReserve(fno, userInput);
  }

  return (
    <div>
      {completeMsg}
      <StBackBtn>
        <BiArrowBack onClick={() => navigate("/booking/26")}></BiArrowBack>
      </StBackBtn>
      <div className="login-container">
        <form onSubmit={handleSubmit}>
          <input
            className="userId"
            type="text"
            name="smajor"
            smajor={smajor}
            onChange={onChange}
            placeholder="학과 ex) ooo학과"
            required
          />

          <input
            className="userPw"
            type="text"
            name="snum"
            snum={snum}
            placeholder="학번 ex) 000000"
            onChange={onChange}
            required
          />

          <input
            className="userPw"
            type="text"
            name="sname"
            sname={sname}
            placeholder="이름 ex) ooo"
            onChange={onChange}
            required
          />
          <button type="submit" className="login-btn">
            예약하기
          </button>
        </form>
      </div>
    </div>
  );
}

// Style
const StBackBtn = styled.div`
  position: fixed;
  top: 5%;
`;
