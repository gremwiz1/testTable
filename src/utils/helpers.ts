export function getDataOnRussian(date: string) {
  const arrayMonth = [
    "января",
    "февраля",
    "марта",
    "апреля",
    "мая",
    "июня",
    "июля",
    "августа",
    "сентября",
    "октября",
    "ноября",
    "декабря",
  ];
  const year = date.split("-")[0];
  const day = date.split("-")[2];
  const numberMonth = Number(date.split("-")[1]);
  const month = arrayMonth[numberMonth - 1];
  return `${day} ${month} ${year} года`;
}
