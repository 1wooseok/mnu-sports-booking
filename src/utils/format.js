// ex) 9 -> 09
export function dateFormatter(date) {
  return Number(date) < 10 ? `0${date}` : date;
}

// ex) 2022,5,1 -> 2022-05-01
export function fullDateFormatter(dateState) {
  return `${dateState.viewYear}-${dateFormatter(
    dateState.viewMonth
  )}-${dateFormatter(dateState.viewDate || 1)}`;
}

// ex) 12 -> 12:00
export function timeFormatter(time) {
  return Number(time) < 10 ? `0${time}:00` : `${time}:00`;
}

// ex range(8, 10) -> [8, 9, 10]
export function range(start, end) {
  return Array(end - start + 1)
    .fill()
    .map((_, idx) => start + idx);
}

// ex "11:00" -> 11
function stringTimeToNumber(startTime) {
  return Number(startTime.split(" ")[1].split(":")[0]);
}

// ex data = ["09:00", "10:00", "11:00"] -> [9,10,11]
export function setTimeListFromReservedTime(data) {
  return data.map((booking) => stringTimeToNumber(booking.startTime));
}

// Facility
export function setPlace(item) {
  switch (item) {
    case 1:
      return "풋살장";
    case 27:
      return "풋살장";
    case 29:
      return "테니스장";
    case 34:
      return "족구장";
    case 36:
      return "대운동장";
    default:
      break;
  }
}
