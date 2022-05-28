import IMAGES from "./weather-icons";

export default function QuarterOfToday(props) {
  return (
    <ul>
      <li>88º</li>
      <li>
        <img src={IMAGES.Icon.thunderstorm} alt="weather" />
      </li>
      <li>
        <img src={IMAGES.Other.raindrop} alt="chance of percipation" /> 15%
      </li>
    </ul>
  );
}
