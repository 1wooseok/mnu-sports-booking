import axios from "axios";

const fno = 1;

// User
export function getReservedTime(fno, data) {
  return axios.post(`/booking/${fno}/date`, data);
}

export function postReserve(fno, data) {
  return axios.post(`/booking/${fno}`, data);
}

export function getMyBooking(data) {
  return axios.post(`/booking/check`, data);
}

export function postCheckDuplicateId(data) {
  return axios.post(`/students/idcheck`, data);
}

export function deleteMyBooking(data) {
  return axios.delete("/booking/booking/snum", {data});
}

// Admin
export function postAdminLogin(data) {
  return axios.post("/admin/login", data);
}

export function getAllBookingList() {
  return axios.get(`/manage/booking/${fno}`);
}

export function getBookingListByDate(data) {
  return axios.post(`/manage/booking/${fno}/date`, data)
}

export function deleteBooking(bno) {
  return axios.delete(`/manage/booking/${bno}`);
}

export function checkAdminLogin(data) {
  return axios.post("/admin/check", data);
}

export function postAdminLogout() {
  return axios.post("/admin/logout");
}
