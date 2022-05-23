import React, { useState } from "react";
import styled from "styled-components";
import { checkIdFormat } from "../../utils/check";
import useInputChange from "../hook/useInputs";
import { getMyBooking } from "../../apis/api";
import { SmallLoading } from "../modal/loading";

function MyList() {
  const myListBtn = (
    <MyListBtn onClick={() => setCurrentView(snumForm)}>내역보기</MyListBtn>
  );
  const [currentView, setCurrentView] = useState(myListBtn);
  const snumForm = <SnumForm setCurrentView={setCurrentView} />;
  return <MyListContainer>{currentView}</MyListContainer>;
}

function SnumForm({ setCurrentView }) {
  const [{ snum }, onChange] = useInputChange({
    snum: "",
  });

  async function handleSubmit(e) {
    e.preventDefault();
    if (!checkIdFormat(snum)) return alert("학번을 확인해주세요.");
    setCurrentView(() => <SmallLoading />);
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
  if (typeof serverData === "string") return <StNoBooking>{serverData}</StNoBooking>;
  if (!serverData) return <h1>에러가 발생했습니다. 새로고침 해주세요.</h1>
  return (
    <StListViewer>
      <ul>
        {[...serverData].reverse().map((test) => {
          const date = test.startTime.split(" ")[0];
          const start = test.startTime.split(" ")[1];
          const end = test.endTime.split(" ")[1];
          return (
            <StListCard key={test.bno}>
              <p>{`${date} / ${start} - ${end}`}</p>
            </StListCard>
          );
        })}
      </ul>
    </StListViewer>
  );
}

async function getMyBookingList(data) {
  try {
    const res = await getMyBooking(data);
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
  border: 1px solid silver;

  background-color: white;

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

  min-width: 13rem;
  max-width: 15rem;

  min-height: 12rem;
  max-height: 12rem;

  overflow: auto;
`;

const StListCard = styled.div`
  border-bottom: 1px solid black;
  padding: 0.5rem 0;
`;

const StNoBooking = styled.p`
  padding: 0.2rem 0.7rem;  
`;
export default MyList;
