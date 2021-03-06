import { postCheckDuplicateId } from "../apis/api";
import { dateFormatter } from "./format";

const REGEX = {
  ID: /^[0-9]{6}$/,
  PW: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
  NAME: /^[가-힣]{2,6}$/,
  PHONE: /^010-?([0-9]{4})-?([0-9]{4})$/,
  MAJOR: /^[가-힣]+$/,
  NUMBER: /^[0-9]{4}$/,
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

export function checkPasswordFormat(pw) {
  return REGEX.NUMBER.test(pw);
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
  ); 
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

// UserInput
export function checkUserInputBeforeBooking(userInput, location) {
  const { smajor, sname, snum, spw } = userInput;
  if (!checkMajorFormat(smajor)) {
    alert("옳바른 학과명 입력해 주세요.");
    return false;
  }
  if (!checkIdFormat(snum)) {
    alert("옳바른 학번을 입력해 주세요.");
    return false;
  }
  if (!checkNameFormat(sname)) {
    alert("이름을 확인해 주세요.");
    return false;
  }
  if (!checkPasswordFormat(spw)) {
    alert("비밀번호를 확인해 주세요 (숫자 4자리입니다.)");
    return false;
  }
  if (!location.state) {
    alert("날짜와 시간을 선택해주세요!");
    return false;
  }
  if (!location.state.fno) {
    alert("날짜와 시간을 선택해주세요!");
    return false;
  }
  if (!location.state.dateState) {
    alert("날짜를 선택해주세요!");
    return false;
  }
  if (!location.state.userPick) {
    alert("시간을 선택해주세요!");
    return false;
  }
  return true;
}