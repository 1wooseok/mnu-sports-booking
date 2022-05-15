import axios from "axios";
import { fullDateFormatter, timeFormatter } from "../utils/format";

// const PROXY = window.location.hostname === 'localhost' ? '' : '/proxy';

export function getReservedTime(fno, data) {
  return axios.post(`/booking/${fno}/date`, data);
}

export function postReserve(fno, dateState, userPick) {
  const data = {
    date: fullDateFormatter(dateState),
    maxHour: userPick.length,
    selectedTime: timeFormatter(userPick[0])
  };
  console.log({ data})
  return axios.post(`/booking/${fno}`, data);
}
