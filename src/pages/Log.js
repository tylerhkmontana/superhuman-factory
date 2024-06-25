import { Calendar } from "react-calendar";
import { useState } from "react";
import "../components/Calendar.css";

export default function Log() {
  const [value, setValue] = useState(new Date());
  const calendarHandler = (e) => {
    setValue(e);
  };
  return (
    <div>
      <Calendar onChange={(e) => calendarHandler(e)} value={value} />
    </div>
  );
}
