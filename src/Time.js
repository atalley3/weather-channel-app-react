import React from "react";

export default function Time(props) {
  let date = new Date(props.timestamp * 1000);
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let amOrPm = "AM";

  if (hours >= 12) {
    amOrPm = "PM";
  }
  if (hours > 12) {
    hours = hours - 12;
  }

  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  if (hours === 0) {
    hours = 12;
    amOrPm = "AM";
  }
  if (hours < 10) {
    hours = `0${hours}`;
  }

  return (
    <span>
      {hours}:{minutes} {amOrPm}
    </span>
  );
}
