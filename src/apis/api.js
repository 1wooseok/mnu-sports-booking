import axios from "axios";

export function getReservedTime(fno, data) {
  return axios.post(`/booking/${1}/date`, data);
}

export function postReserve(fno, data) {
  return axios.post(`/booking/${1}`, data);
}
