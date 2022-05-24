import { useState } from "react";

export default function Icon(props) {
  const [timeOfDay, setTimeOfDay] = useState("day");
  let date = new Date(props.info.dt * 1000);
  let hours = date.getHours();
  if (hours < 6 || hours > 18) {
    setTimeOfDay("night");
  }
  let iconId = props.info.icon;
  let weatherIds = {
    200: {
      description: "thunderstorm with light rain",
      icon: (
        <img
          src={require("./weather-icons/thunderstorms.svg").default}
          alt="thunderstorm with light rain"
        />
      ),
    },
    201: {
      description: "thunderstorm with rain",
      icon: (
        <img
          src={require("./weather-icons/thunderstorms-rain.svg").default}
          alt="thunderstorm with rain"
        />
      ),
    },
    202: {
      description: "thunderstorm with heavy rain",
      icon: (
        <img
          src={require("./weather-icons/thunderstorms-rain.svg").default}
          alt="thunderstorm with heavy rain"
        />
      ),
    },
    210: {
      description: "light thunderstorm",
      icon: (
        <img
          src={require("./weather-icons/thunderstorms.svg").default}
          alt="light thunderstorm"
        />
      ),
    },
    211: {
      description: "thunderstorm",
      icon: (
        <img
          src={require("./weather-icons/thunderstorms.svg").default}
          alt="thunderstorm"
        />
      ),
    },
    212: {
      description: "heavy thunderstorm",
      icon: (
        <img
          src={require("./weather-icons/thunderstorms-rain.svg").default}
          alt="heavy thunderstorm"
        />
      ),
    },
    221: {
      description: "ragged thunderstorm",
      icon: (
        <img
          src={require("./weather-icons/thunderstorms-rain.svg").default}
          alt="ragged thunderstorm"
        />
      ),
    },
    230: {
      description: "thunderstorm with light drizzle",
      icon: (
        <img
          src={require("./weather-icons/thunderstorms.svg").default}
          alt="thunderstomr with light drizzle"
        />
      ),
    },
    231: {
      description: "thunderstorm with drizzle",
      icon: (
        <img
          src={require("./weather-icons/thunderstorms-rain.svg").default}
          alt="thunderstorm with drizzle"
        />
      ),
    },
    232: {
      description: "thunderstorm with heavy drizzle",
      icon: (
        <img
          src={require("./weather-icons/thunderstorms-rain.svg").default}
          alt="thunderstorm with heavy drizzle"
        />
      ),
    },
    300: {
      description: "light intesity drizzle",
      icon: (
        <img
          src={require("./weather-icons/drizzle.svg").default}
          alt="light intensity drizzle"
        />
      ),
    },
    301: {
      description: "drizzle",
      icon: (
        <img
          src={require("./weather-icons/drizzle.svg").default}
          alt="drizzle"
        />
      ),
    },
    302: {
      description: "heavy intenisty drizzle",
      icon: (
        <img
          src={require("./weather-icons/drizzle.svg").default}
          alt="heavy intensity drizzle"
        />
      ),
    },
    310: {
      description: "light intensity drizzle rain",
      icon: (
        <img
          src={require("./weather-icons/drizzle.svg").default}
          alt="light intensity drizzle rain"
        />
      ),
    },
    311: {
      description: "drizzle rain",
      icon: (
        <img
          src={require("./weather-icons/drizzle.svg").default}
          alt="drizzle rain"
        />
      ),
    },
    312: {
      description: "heavy intensity drizzle rain",
      icon: (
        <img
          src={require("./weather-icons/drizzle.svg").default}
          alt="havey intensity drizzle rain"
        />
      ),
    },
    313: {
      description: "shower rain and drizzle",
      icon: (
        <img
          src={require("./weather-icons/drizzle.svg").default}
          alt="shower rain and drizzle"
        />
      ),
    },
    314: {
      description: "heavy shower rain and drizzle",
      icon: (
        <img
          src={require("./weather-icons/drizzle.svg").default}
          alt="heavy shower rain and drizzle"
        />
      ),
    },
    321: {
      description: "shower drizzle",
      icon: (
        <img
          src={require("./weather-icons/drizzle.svg").default}
          alt="shower drizzle"
        />
      ),
    },
    500: {
      description: "light rain",
      icon: (
        <img
          src={require("./weather-icons/drizzle.svg").default}
          alt="light rain"
        />
      ),
    },
    501: {
      description: "moderate rain",
      icon: (
        <img
          src={require("./weather-icons/rain.svg").default}
          alt="moderate rain"
        />
      ),
    },
    502: {
      description: " heavy instenstiy rain",
      icon: (
        <img
          src={require("./weather-icons/rain.svg").default}
          alt="heavy intensity rain"
        />
      ),
    },
    503: {
      description: "very heavy rain",
      icon: (
        <img
          src={require("./weather-icons/rain.svg").default}
          alt="very heavy rain"
        />
      ),
    },
    504: {
      description: "extreme rain",
      icon: (
        <img
          src={require("./weather-icons/rain.svg").default}
          alt="extreme rain"
        />
      ),
    },
    511: {
      description: "freezing rain",
      icon: (
        <img
          src={require("./weather-icons/sleet.svg").default}
          alt="freezing rain"
        />
      ),
    },
    520: {
      description: "light intensity shower rain",
      icon: (
        <img
          src={require("./weather-icons/rain.svg").default}
          alt="light intensity shower rain"
        />
      ),
    },
    521: {
      description: "shower rain",
      icon: (
        <img
          src={require("./weather-icons/rain.svg").default}
          alt="shower rain"
        />
      ),
    },
    522: {
      description: "heavy intensity shower rain",
      icon: (
        <img
          src={require("./weather-icons/rain.svg").default}
          alt="heavy intensity shower rain"
        />
      ),
    },
    531: {
      description: "ragged shower rain",
      icon: (
        <img
          src={require("./weather-icons/rain.svg").default}
          alt="ragged shower rain"
        />
      ),
    },
    600: {
      description: "light snow",
      icon: (
        <img
          src={require("./weather-icons/snow.svg").default}
          alt="light snow"
        />
      ),
    },
    601: {
      description: "snow",
      icon: <img src={require("./weather-icons/snow.svg")} alt="snow" />,
    },
    602: {
      description: "heavy snow",
      icon: (
        <img
          src={require("./weather-icons/snowflake.svg").default}
          alt="heavy snow"
        />
      ),
    },
    611: {
      description: "sleet",
      icon: (
        <img src={require("./weather-icons/sleet.svg").default} alt="sleet" />
      ),
    },
    612: {
      description: "light shower sleet",
      icon: (
        <img
          src={require("./weather-icons/sleet.svg").default}
          alt="slight shower sleet"
        />
      ),
    },
    613: {
      description: "shower sleet",
      icon: (
        <img
          src={require("./weather-icons/sleet.svg").default}
          alt="shower sleet"
        />
      ),
    },
    615: {
      description: "light rain and snow",
      icon: (
        <img
          src={require("./weather-icons/sleet.svg").default}
          alt="light rain and snow"
        />
      ),
    },
    616: {
      description: "rain and snow",
      icon: (
        <img
          src={require("./weather-icons/sleet.svg").default}
          alt="rain and snow"
        />
      ),
    },
    620: {
      description: "light shower snow",
      icon: (
        <img
          src={require("./weather-icons/snow.svg").default}
          alt="light shower snow"
        />
      ),
    },
    621: {
      description: "shower snow",
      icon: (
        <img
          src={require("./weather-icons/snowflake.svg").default}
          alt="shower snow"
        />
      ),
    },
    622: {
      description: "Heavy shower snow",
      icon: (
        <img
          src={require("./weather-icons/snowflake.svg").default}
          alt="heavy shower snow"
        />
      ),
    },
    701: {
      description: "mist",
      icon: (
        <img src={require("./weather-icons/mist.svg").default} alt="mist" />
      ),
    },
    711: {
      description: "smoke",
      icon: (
        <img src={require("./weather-icons/smoke.svg").default} alt="smoke" />
      ),
    },
    721: {
      description: "haze",
      icon: (
        <img src={require("./weather-icons/haze.svg").default} alt="haze" />
      ),
    },
    731: {
      description: "Sand/dust whirls",
      icon: (
        <img
          src={require("./weather-icons/dust-wind.svg").default}
          alt="sand/dust whirls"
        />
      ),
    },
    741: {
      description: "fog",
      icon: <img src={require("./weather-icons/fog.svg").default} alt="fog" />,
    },
    751: {
      description: "sand",
      icon: (
        <img
          src={require("./weather-icons/dust-wind.svg").default}
          alt="sand"
        />
      ),
    },
    761: {
      description: "dust",
      icon: (
        <img src={require("./weather-icons/dust.svg").default} alt="dust" />
      ),
    },
    762: {
      description: "volanic ash",
      icon: (
        <img
          src={require("./weather-icons/dust-wind.svg").default}
          alt="volanic ash"
        />
      ),
    },
    771: {
      description: "squalls",
      icon: (
        <img src={require("./weather-icons/wind.svg").default} alt="Squalls" />
      ),
    },
    781: {
      description: "tornado",
      icon: (
        <img
          src={require("./weather-icons/tornado.svg").default}
          alt="tornado"
        />
      ),
    },
    800: {
      description: "clear sky",
      icon: (
        <img
          src={require(`./weather-icons/clear-${timeOfDay}.svg`).default}
          alt="clear sky"
        />
      ),
    },
    801: {
      description: "few clouds",
      icon: (
        <img
          src={require("./weather-icons/cloudy.svg").default}
          alt="few clouds"
        />
      ),
    },
    802: {
      description: "scattered clouds",
      icon: (
        <img
          src={require(`./weather-icons/overcast-${timeOfDay}.svg`).default}
          alt="scattered clouds"
        />
      ),
    },
    803: {
      description: "broken clouds",
      icon: (
        <img
          src={require(`./weather-icons/overcast-${timeOfDay}.svg`).default}
          alt="broken clouds"
        />
      ),
    },
    804: {
      description: "overcast clouds",
      icon: (
        <img
          src={require("./weather-icons/overcast.svg").default}
          alt="overcast clouds"
        />
      ),
    },
  };

  return <>{weatherIds[iconId].icon}</>;
}
