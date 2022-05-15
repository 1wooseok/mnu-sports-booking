import axios from "axios";
import { fullDateFormatter, timeFormatter } from "../utils/format";

const API = window.location.hostname === 'localhost' ? '' : '/api';

export function getReservedTime(fno, data) {
  console.log({ data })
  return axios.post(`http://3.94.44.116:8080/booking/1/date`, data);
}

export function postReserve(fno, dateState, userPick) {
  const data = {
    date: fullDateFormatter(dateState),
    maxHour: userPick.length,
    selectedTime: timeFormatter(userPick[0])
  };
  console.log({ data})
  return axios.post(`${API}/booking/${fno}`, data);
}
