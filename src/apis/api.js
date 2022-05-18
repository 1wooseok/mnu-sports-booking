import axios from "axios";

// User
export function getReservedTime(fno, data) {
  return axios.post(`/booking/${1}/date`, data);
}

export function postReserve(fno, data) {
  return axios.post(`/booking/${1}`, data);
}

export function getMyBooking(data) {
  return axios.post(`/booking/check`, data);
}

// Admin
export function postAdminLogin(data) {
  return axios.post('/admin/login', data);
}

export function getAllBookingList() {
  return axios.get('/manage/booking/1');
}

export function deleteBooking(bno) {
  return axios.delete(`/manage/booking/${bno}`);
}

export function checkAdminLogin(data) {
  return axios.post('/admin/check', data);
}

export function postAdminLogout() {
  return axios.post('/admin/logout');
}