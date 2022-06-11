import React from "react";
import IMAGES from "./weather-icons";

export default function Icon(props) {
  let timeOfDay = "Day";
  let date = new Date(props.info.dt * 1000);
  let hours = date.getHours();
  if (hours < 6 || hours > 18) {
    timeOfDay = "Night";
  }
  let iconId = props.info.icon;
  iconId = iconId.toString();

  let weatherIds = {
    200: "thunderstorms",
    201: "thunderstormsRain",
    202: "thunderstormsRain",
    210: "thunderstormsRain",
    211: "thunderstorms",
    212: "thunderstormsRain",
    221: "thunderstormsRain",
    230: "thunderstorms",
    231: "thunderstormsRain",
    232: "thunderstormsRain",
    300: "drizzle",
    301: "drizzle",
    302: "drizzle",
    310: "drizzle",
    311: "drizzle",
    312: "drizzle",
    313: "drizzle",
    314: "drizzle",
    321: "drizzle",
    500: "drizzle",
    501: "rain",
    502: "rain",
    503: "rain",
    504: "rain",
    511: "sleet",
    520: "rain",
    521: "rain",
    522: "rain",
    531: "rain",
    600: "snow",
    601: "snow",
    602: "snowflake",
    611: "sleet",
    612: "sleet",
    613: "sleet",
    615: "sleet",
    616: "sleet",
    620: "snow",
    621: "snowflake",
    622: "snowflake",
    701: "mist",
    711: "smoke",
    721: "haze",
    731: "dustWind",
    741: "fog",
    751: "dustWind",
    761: "dust",
    762: "dustWind",
    771: "wind",
    781: "tornado",
    800: `clear${timeOfDay}`,
    801: "cloudy",
    802: `overcast${timeOfDay}`,
    803: `overcast${timeOfDay}`,
    804: "overcast",
  };
  let iconName = weatherIds[iconId];
  let imgSrc = IMAGES.Icon[iconName];
  let description = props.info.description;

  return (
    <>
      <img className="Icon" src={imgSrc} alt={description} />
    </>
  );
}
