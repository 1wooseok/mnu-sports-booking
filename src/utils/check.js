import { postCheckDuplicateId } from "../apis/api";
import { dateFormatter } from "./format";

const REGEX = {
  ID: /^[0-9]{6}$/,
  PW: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
  NAME: /^[가-힣]{2,5}$/,
  PHONE: /^010-?([0-9]{4})-?([0-9]{4})$/,
  MAJOR: /^[가-힣]+$/,
};

// Login
export function checkIdFormat(id) {
  return REGEX.ID.test(id);
}

export function checkPhoneFormat(phone) {
  return REGEX.PHONE.test(phone);
}

export function checkMajorFormat(major) {
  return REGEX.MAJOR.test(major) && major.substr(major.length - 2) === "학과";
}

export function checkNameFormat(name) {
  return REGEX.NAME.test(name);
}

export function chekcBothPwMatch(pw, confirm) {
  return pw === confirm;
}

export async function checkDuplicate(id) {
  try {
    await postCheckDuplicateId({ id });
  } catch (err) {
    return err.response.status === 400 && alert("이미 존재하는 아이디 입니다.");
  }
}

// Calendar
export function isPicked(state, date) {
  return Number(date) === Number(state.viewDate);
}

// LEGACY isValid
// export function isValid(TODAY, state, date) {
//   date = date ? date : 1;
//   return new Date(`${state.viewYear}-${state.viewMonth}-${date}`) > TODAY; // 일단 때웟음. 고쳐야함.
// }

// moth, date를 06 이런식으로 표기해야함.
// 월 표기시 -1  하여 사용해야함.
export function isValid(TODAY, state, date) {
  date = date ? date : 1;
  return (
    new Date(
      state.viewYear,
      dateFormatter(state.viewMonth - 1),
      dateFormatter(date)
    ) > TODAY
  ); // 일단 때웟음. 고쳐야함.
}

export function isToday(TODAY, state, date) {
  return (
    TODAY.getDate() === date &&
    TODAY.getMonth() + 1 === state.viewMonth &&
    TODAY.getFullYear() === state.viewYear
  );
}

// Time
export function isPastTime(hour) {
  const [currHour] = new Date().toTimeString().split(":");
  return Number(hour) < Number(currHour);
}

export function isValidUserInput(dateState, userPick) {
  if (!isValid(new Date(), dateState, dateState.viewDate))
    return alert("유효한 날짜를 선택해주세요");
  if (isPastTime(userPick[0])) return alert("유효한 시간을 입력해 주세요;");
  return true;
}
