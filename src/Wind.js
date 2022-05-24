export default function Wind(props) {
  let windSpeed = props.info.wind;
  let units = props.units;

  if (units === "metric") {
    windSpeed = Math.round(windSpeed / 2.237);
    return <span className="wind">{windSpeed} metre/sec</span>;
  }
  if (units === "imperial") {
    windSpeed = Math.round(windSpeed);
    return <span className="wind">{windSpeed} MPH</span>;
  }
}
