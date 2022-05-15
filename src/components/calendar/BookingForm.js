import React from "react";
import styled from "styled-components";
import useInputChange from "../hook/useInputs";

async function postReserve(e) {
  e.preventDefault();
  try {
  } catch (err) {}
}

function BookingForm() {
  const [{ smajor, sname, snum }, onChange] = useInputChange({
    smajor: "",
    sname: "",
    snum: "",
  });

  return (
    <>
    <StFormContainer />
    <StBookingForm onSubmit={postReserve}>
      <input value={smajor} onChange={onChange} placeholder="학과" />
      <input value={snum} onChange={onChange} placeholder="학번" />
      <input value={sname} onChange={onChange} placeholder="이름"  />
    </StBookingForm>
    </>
  );
}

const StFormContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;

  width: 100vw;
  height: 100vh;

  z-index: 2;
  opacity: 0.7;
  transition: 0.3;

  background-color: black;
`;

const StBookingForm = styled.form`
  position: absolute;
  top: 50%;
  left: 50%;

  width: 70vw;
  height: 100vh;

  z-index: 3;
  transition: 0.3;

  transform: translateX(-45%) translateY(-45%);
`;

export default BookingForm;
