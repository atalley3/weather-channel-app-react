import React from "react";

export default function Day(props) {
  let d = new Date(props.timestamp * 1000);
  let date = d.getDate();
  let month = d.getMonth() + 1;
  let year = d.getFullYear();

  return (
    <>
      {month}/{date}/{year}
    </>
  );
}
