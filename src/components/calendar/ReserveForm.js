import React, { useState } from "react";
import styled from "styled-components";
import Complete from "../modal/complete";
import { BiArrowBack } from "react-icons/bi";
import { postReserve } from "../../apis/api";
import { BtnLoading } from "../modal/loading";
import useInputChange from "../../hook/useInputs";
import { checkUserInputBeforeBooking } from "../../utils/check";
import { useLocation } from "react-router-dom";
import { useNavigate } from "../../hook/useNavigate";
import { fullDateFormatter, timeFormatter } from "../../utils/format";

export default function Login() {
  const navigate = useNavigate();
  const location = useLocation();
  const [text, setText] = useState("예약하기");
  const [completeMsg, setCompleteMsg] = useState(null);
  const [userInput, onChange] = useInputChange({
    smajor: "",
    sname: "",
    snum: "",
    spw: "",
  });
  const { smajor, sname, snum, spw } = userInput;

  async function requestReserve(fno, payload) {
    setText(<BtnLoading />)
    try {
      const res = await postReserve(fno, payload);
      if (res.status === 201) {
        location.state = null;
        setText("예약하기");
        setCompleteMsg(<Complete data={res.data} fno={fno} />);
      }
      if (res.status === 202) {
        location.state = null;
        if (
          window.confirm(
            "이미 예약된 시간입니다. 다른 시간에 예약하시겠습니까?"
          )
        ) {
          navigate("/booking/27"); // navigate
        }
      }
    } catch (err) {
      setText("예약하기");
      alert("예약중 오류가 발생했습니다. 뒤로가서 다시 시도해주세요");
      throw new Error(navigate("/booking/27")); // navigate
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!checkUserInputBeforeBooking(userInput, location)) return;
    const { fno, dateState, userPick } = location.state;
    const payload = {
      date: fullDateFormatter(dateState),
      maxHour: userPick.length,
      selectedTime: timeFormatter(userPick[0]),
      smajor: smajor,
      sname: sname,
      snum: Number(snum),
      spw,
    };
    requestReserve(fno, payload);
  }

  return (
    <div>
      {completeMsg}
      <BiArrowBack onClick={() => navigate("/booking/26")}></BiArrowBack>
      <StContainer>
        <form onSubmit={handleSubmit}>
          <StInput
            smajor={smajor}
            name="smajor"
            onChange={onChange}
            placeholder="학과  ex) ooo'학과'"
            required
          />
          <StInput
            sname={sname}
            name="sname"
            placeholder="이름  ex) ooo"
            onChange={onChange}
            required
          />
          <StInput
            snum={snum}
            name="snum"
            placeholder="학번  ex) 000000"
            onChange={onChange}
            required
          />
          <StInput
            type="password"
            spw={spw}
            name="spw"
            placeholder="암호 4자리  ex) 1234"
            onChange={onChange}
            required
          />
          <StSubmitBtn>{text}</StSubmitBtn>
        </form>
      </StContainer>
    </div>
  );
}

const StContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const StInput = styled.input`
  display: flex;
  flex-direction: column;
  -webkit-appearance: none;
  width: 70vw;
  height: 2rem;
  border: 1px solid silver;
  border-radius: 5px;
  margin-top: 10px;
  padding: 0 10px;
`;

const StSubmitBtn = styled.button`
  width: 70vw;
  height: 2rem;
  border: none;
  border-radius: 5px;
  background-color: limegreen;
  margin: 10px 0;
  color: white;
  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
`;
