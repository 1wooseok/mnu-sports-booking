import React, { useState, useRef, useEffect } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import { checkIdFormat } from "../../utils/check";
import useInputChange from "../hook/useInputs";
import "./login.css";
import styled from "styled-components";
import { postReserve } from "../../apis/api";
import Complete from "../modal/complete";
import { fullDateFormatter, timeFormatter } from "../../utils/format";

export default function Login() {
  const [{ smajor, sname, snum }, onReset, onChange] = useInputChange({
    smajor: "",
    sname: "",
    snum: "",
  });
  const [completeMsg, setCompleteMsg] = useState(null);
  const location = useLocation();
  
  async function requestReserve(fno, userInput) {
    // if (!isValidUserInput(dateState, userPick)) return;
    try {
      const res = await postReserve(fno, userInput);
      console.log(res);
      if (res.status === 201) {
        location.state = null;
        setCompleteMsg(<Complete data={res.data} fno={fno} />);
      }
    } catch (err) {
      console.log(`${err} : 예약 신청할때 발생한 에러`);
    }
  }
  
  function handleSubmit(e) {
    e.preventDefault();
    const { fno, dateState, userPick } = location.state;
    const userInput = {
      date: fullDateFormatter(dateState),
      maxHour: userPick.length,
      selectedTime: timeFormatter(userPick[0]),
      smajor: smajor,
      sname: sname,
      snum: Number(snum),
    };
    requestReserve(fno , userInput)
  }

  return (
    <div>
      {completeMsg}
      <StBackBtn>
        <Link to="/booking/27">&lt; 뒤로가기</Link>
      </StBackBtn>
      <div className="login-container">
        <form onSubmit={handleSubmit}>
          <input
            className="userId"
            type="text"
            name="smajor"
            smajor={smajor}
            onChange={onChange}
            placeholder="학과 ex) 컴퓨터공학과"
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
            placeholder="이름 ex) 컴퓨터"
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
