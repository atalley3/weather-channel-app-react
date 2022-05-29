import IMAGES from "./weather-icons";
import Icon from "./icon";
import "./DailyFutureForecast.css";

export default function DailyFutureForecast(props) {
  let highTemp = props.temp.max;
  let lowTemp = props.temp.min;
  let precipitation = props.pop * 100;
  let dailyWeatherObj = {
    icon: props.forecast.weather[0].id,
    description: props.forecast.weather[0].description,
    dt: props.forecast.dt,
  };
  function dayDisplay() {
    let d = new Date(props.dt * 1000);
    let day = d.getDay();
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    let date = d.getDate();
    return `${days[day]} ${date}`;
  }
  function tempDisplay(temp) {
    if (units === "metric") {
      temp = Math.round((temp - 32) * (5 / 9));
    }
    if (units === "imperial") {
      temp = Math.round(temp);
    }
    return temp;
  }
  return (
    <ul className="DailyFutureForecast">
      <li className="day">{dayDisplay()}</li>
      <li className="highTemp fw-bold">{tempDisplay(highTemp)}º</li>
      <li className="lowTemp">{tempDisplay(lowTemp)}º</li>
      <li className="icon">
        <Icon info={dailyWeatherObj} />
      </li>
      <li className="precipitation">
        <img src={IMAGES.Other.raindrop} alt="precipitation percentage" />{" "}
        {precipitation}%
      </li>
    </ul>
  );
}
