export default function dateWithoutTimezone(date) {
  date.setMinutes(date.getMinutes() + date.getTimezoneOffset());
  return date.toDateString();
}
