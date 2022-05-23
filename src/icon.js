import react, { useState } from "react";

export default function icon(props) {
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
      icon: "./weather-icons/thunderstorms.svg",
    },
    201: {
      description: "thunderstorm with rain",
      icon: "./weather-icons/thunderstorms-rain.svg",
    },
    202: {
      description: "thunderstorm with heavy rain",
      icon: "./weather-icons/thunderstorms-rain.svg",
    },
    210: {
      description: "light thunderstorm",
      icon: "./weather-icons/thunderstorms.svg",
    },
    211: {
      description: "thunderstorm",
      icon: "./weather-icons/thunderstorms.svg",
    },
    212: {
      description: "heavy thunderstorm",
      icon: "./weather-icons/thunderstorms-rain.svg",
    },
    221: {
      description: "ragged thunderstorm",
      icon: "./weather-icons/thunderstorms-rain.svg",
    },
    230: {
      description: "thunderstorm with light drizzle",
      icon: "./weather-icons/thunderstorms.svg",
    },
    231: {
      description: "thunderstorm with drizzle",
      icon: "./weather-icons/thunderstorms-rain.svg",
    },
    232: {
      description: "thunderstorm with heavy drizzle",
      icon: "./weather-icons/thunderstorms-rain.svg",
    },
    300: {
      description: "light intesity drizzle",
      icon: "./weather-icons/drizzle.svg",
    },
    301: {
      description: "drizzle",
      icon: "./weather-icons/drizzle.svg",
    },
    302: {
      description: "heavy intenisty drizzle",
      icon: "./weather-icons/drizzle.svg",
    },
    310: {
      description: "light intensity drizzle rain",
      icon: "./weather-icons/drizzle.svg",
    },
    311: {
      description: "drizzle rain",
      icon: "./weather-icons/drizzle.svg",
    },
    312: {
      description: "heavy intensity drizzle rain",
      icon: "./weather-icons/rain.svg",
    },
    313: {
      description: "shower rain and drizzle",
      icon: "./weather-icons/drizzle.svg",
    },
    314: {
      description: "heavy shower rain and drizzle",
      icon: "./weather-icons/rain.svg",
    },
    321: {
      description: "shower drizzle",
      icon: "./weather-icons/drizzle.svg",
    },
    500: {
      description: "light rain",
      icon: "./weather-icons/drizzle.svg",
    },
    501: {
      description: "moderate rain",
      icon: "./weather-icons/rain.svg",
    },
    502: {
      description: " heavy instenstiy rain",
      icon: "./weather-icons/rain.svg",
    },
    503: {
      description: "very heavy rain",
      icon: "./weather-icons/rain.svg",
    },
    504: {
      description: "extreme rain",
      icon: "./weather-icons/rain.svg",
    },
    511: {
      description: "freezing rain",
      icon: "./weather-icons/sleet.svg",
    },
    520: {
      description: "light intensity shower rain",
      icon: "./weather-icons/rain.svg",
    },
    521: {
      description: "shower rain",
      icon: "./weather-icons/rain.svg",
    },
    522: {
      description: "heavy intensity shower rain",
      icon: "./weather-icons/rain.svg",
    },
    531: {
      description: "ragged shower rain",
      icon: "./weather-icons/rain.svg",
    },
    600: {
      description: "light snow",
      icon: "./weather-icons/snow.svg",
    },
    601: {
      description: "snow",
      icon: "./weather-icons/snow.svg",
    },
    602: {
      description: "heavy snow",
      icon: "./weather-icons/snowflake.svg",
    },
    611: {
      description: "sleet",
      icon: "./weather-icons/sleet.svg",
    },
    612: {
      description: "light shower sleet",
      icon: "./weather-icons/sleet.svg",
    },
    613: {
      description: "shower sleet",
      icon: "./weather-icons/sleet.svg",
    },
    615: {
      description: "light rain and snow",
      icon: "./weather-icons/sleet.svg",
    },
    616: {
      description: "rain and snow",
      icon: "./weather-icons/sleet.svg",
    },
    620: {
      description: "light shower snow",
      icon: "./weather-icons/snow.svg",
    },
    621: {
      description: "shower snow",
      icon: "./weather-icons/snowflake.svg",
    },
    622: {
      description: "Heavy shower snow",
      icon: "./weather-icons/snowflake.svg",
    },
    701: {
      description: "mist",
      icon: "./weather-icons/mist.svg",
    },
    711: {
      description: "smoke",
      icon: "./weather-icons/smoke.svg",
    },
    721: {
      description: "haze",
      icon: "./weather-icons/haze.svg",
    },
    731: {
      description: "Sand/dust whirls",
      icon: "./weather-icons/dust-wind.svg",
    },
    741: {
      description: "fog",
      icon: "./weather-icons/fog.svg",
    },
    751: {
      description: "sand",
      icon: "./weather-icons/dust-wind.svg",
    },
    761: {
      description: "dust",
      icon: "./weather-icons/dust.svg",
    },
    762: {
      description: "volanic ash",
      icon: "./weather-icons/dust-wind.svg",
    },
    771: {
      description: "squalls",
      icon: "./weather-icon/wind.svg",
    },
    781: {
      description: "tornado",
      icon: "./weather-icons/tornado.svg",
    },
    800: {
      description: "clear sky",
      icon: `./weather-icons/clear-${timeOfDay}.svg`,
    },
    801: {
      description: "few clouds",
      icon: "./weather-icons/cloudy.svg",
    },
    802: {
      description: "scattered clouds",
      icon: `./weather-icons/overcast-${timeOfDay}.svg`,
    },
    803: {
      description: "broken clouds",
      icon: `./weather-icons/overcast-${timeOfDay}.svg`,
    },
    804: {
      description: "overcast clouds",
      icon: "./weather-icons/overcast.svg",
    },
  };

  return <></>;
}
