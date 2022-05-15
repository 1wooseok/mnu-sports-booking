import axios from "axios";

// User
export function getReservedTime(fno, data) {
  return axios.post(`/booking/${1}/date`, data);
}

export function postReserve(fno, data) {
  return axios.post(`/booking/${1}`, data);
}

// Admin