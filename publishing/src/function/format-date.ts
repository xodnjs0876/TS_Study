import { DateTime } from "luxon";

export const formatDate = (date: string | undefined, chat: boolean) => {
  if (date === undefined) return "-";
  const inputDateTime = DateTime.fromISO(date);
  const now = DateTime.now();
  const day = now.startOf("day");
  const yesterday = now.minus({ days: 1 }).startOf("day");

  if (inputDateTime >= day && inputDateTime <= day.endOf("day")) {
    return inputDateTime.setLocale("ko").toFormat("a h:mm");
  } else if (
    inputDateTime >= yesterday.startOf("day") &&
    inputDateTime <= yesterday.endOf("day")
  ) {
    return "어제";
  } else {
    if (chat) {
      return inputDateTime.setLocale("ko").toFormat("M월 d일 a h:mm");
    } else {
      return inputDateTime.toFormat("M월 d일");
    }
  }
};
