//import IMAGES from "./WeatherDetails";

export default function UvIndex(props) {
  let uvIndex = props.uvIndex;
  uvIndex = Math.ceil(uvIndex);

  let dangerLevel;
  if (uvIndex === 0) {
    uvIndex = 1;
  }
  if (uvIndex <= 2) {
    dangerLevel = "Low";
  }
  if (uvIndex > 2 && uvIndex <= 5) {
    dangerLevel = "Moderate";
  }
  if (uvIndex > 5 && uvIndex <= 7) {
    dangerLevel = "High";
  }
  if (uvIndex > 7 && uvIndex <= 10) {
    dangerLevel = "Very High";
  }
  if (uvIndex === 11) {
    dangerLevel = "Extreme";
  }
  let alt = `${uvIndex} out of 11, ${dangerLevel}`;

  //let arrPosition = uvIndex - 1;

  return <span className="UvIndex">{alt}</span>;
}
