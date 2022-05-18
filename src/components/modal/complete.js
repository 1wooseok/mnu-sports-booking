import React from "react";
import { useNavigate } from "react-router-dom";
import { setPlace } from "../../utils/format";
import "./complete.css";

export default function Complete({ data, fno }) {
  const navigate = useNavigate();

  const setTime = (selected, max) => {
    const start = Number(selected.split(":")[0]);
    const end = max === 1 ? `${start}:59` : `${start + Number(max) - 1}:59`;
    return `${selected} - ${end}`;
  };

  function handleClick() {
    navigate("/booking/27", { replace: true });
  }

  return (
    <div>
      <div className="modal_container"></div>
      <div className="modal_content">
        <h3 className="check_header">예약 완료!</h3>
        <div className="check_image"><i className="far fa-calendar-check"></i></div>
        <div className="check_body">
          <p><span>시설</span>{setPlace(Number(fno))}</p>
          <p><span>일정</span>{data.date}</p>
          <p><span>시간</span>{setTime(data.selectedTime, data.maxHour)}</p>
        </div>
        <div className="btn_section" onClick={handleClick}>확인</div>
      </div>
    </div>
  );
}
