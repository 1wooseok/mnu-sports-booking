import React, { useState } from "react";
import styled from "styled-components";
import { checkIdFormat } from "../../utils/check";
import useInputChange from "../hook/useInputs";
import { getMyBooking } from "../../apis/api";

function MyList() {
  const myListBtn = (
    <MyListBtn onClick={() => setCurrentView(snumForm)}>내역보기</MyListBtn>
  );
  const [currentView, setCurrentView] = useState(myListBtn);
  const snumForm = <SnumForm setCurrentView={setCurrentView} />;
  return <MyListContainer>{currentView}</MyListContainer>;
}

function SnumForm({ setCurrentView }) {
  const [{ snum }, onReset, onChange] = useInputChange({
    snum: "",
  });

  async function handleSubmit(e) {
    e.preventDefault();
    if (!checkIdFormat(snum)) return alert("학번을 확인해주세요.");
    const serverData = await getMyBookingList({ snum });
    setCurrentView(<ListViewer serverData={serverData} />);
  }
  return (
    <form onSubmit={handleSubmit}>
      <StSnumForm
        name="snum"
        value={snum}
        onChange={onChange}
        placeholder="학번을 입력하세요."
        autoFocus
      />
    </form>
  );
}

function ListViewer({ serverData }) {
  console.log(serverData);
  if (typeof serverData === "string") {
    return <p>{serverData}</p>;
  }
  return (
    <StListViewer>
      <ul>
        {serverData.map((test) => {
          const date = test.startTime.split(' ')[0];
          const start = test.startTime.split(' ')[1];
          const end = test.endTime.split(' ')[1];
          return <StListCard key={test.bno}><p>{`${date} / ${start} - ${end}`}</p></StListCard>
        })}
      </ul>
    </StListViewer>
  );
}

async function getMyBookingList(data) {
  try {
    const res = await getMyBooking(data);
    if (res.status === 202) return res.message;
    return res.data;
  } catch (err) {
    console.log(`${err} - 내 예약목록 가져올때 에러`);
  }
}

const MyListContainer = styled.div`
  position: absolute;
  top: 2.2rem;
  right: 0.5rem;

  z-index: 10001;

  border-radius: 3px;

  background-color: white;
  box-shadow: rgb(0 0 0 / 10%) 0px -1px 2px 0px inset;

  text-align: center;
  font-size: 14px;
  font-weight: 500;

  padding: 0.5rem 0;
`;

const MyListBtn = styled.div`
  min-width: 7rem;
  width: match-content;
  min-hegith: 2rem;
  height: match-content;
`;

const StSnumForm = styled.input`
  min-width: 7rem;
  max-width: 8.5rem;

  border: none;
  outline: none;
  padding: 0 1rem;
`;

const StListViewer = styled.div`
  padding: 0.5rem 1rem;

`;

const StListCard = styled.div`
  border-bottom: 1px solid black;
  margin: 1rem 0;
`;
export default MyList;
