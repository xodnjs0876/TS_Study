import { DateTime } from "luxon";

const formatDateTime = (date: string | DateTime) => {
  let dateTime: DateTime;
  if (date instanceof DateTime) {
    dateTime = date;
  } else {
    dateTime = DateTime.fromISO(date);
  }

  return dateTime.setLocale("ko-KR").toFormat("MM월 dd일 a h:mm");
};

export default formatDateTime;
