import React from "react";
import IMAGES from "./weather-icons";
import Time from "./Time";
import MoonPhase from "./MoonPhase";
import UvIndex from "./UvIndex";
import Visibility from "./visibility";
import Wind from "./Wind";

import "./WeatherDetails.css";

export default function WeatherDetails(props) {
  let weatherObj = props.info;
  let unit = props.unit;

  //displays temps in their appropriate units
  let temps = [
    weatherObj.feelsLike,
    weatherObj.highTemp,
    weatherObj.lowTemp,
    weatherObj.dewPoint,
  ];
  if (unit === "metric") {
    temps = temps.map((temp) => Math.round((temp - 32) * (5 / 9)));
  }
  if (unit === "imperial") {
    temps = temps.map((temp) => Math.round(temp));
  }

  return (
    <section className="WeatherDetails">
      <header>
        <h2>Weather Today in {props.location}</h2>
      </header>
      <main>
        <div className="container m-1">
          <div className="row">
            <div className="col-sm-6 border-bottom align-top text-center">
              Feels Like:{"    "} <span className="feelsLike">{temps[0]}º</span>
            </div>
            <div className="col-sm-6 border-bottom text-center sun">
              <div>
                <img src={IMAGES.Sun.sunrise} alt="sunrise" />
                <Time timestamp={weatherObj.sunriseDT} />
              </div>
              <div>
                <img src={IMAGES.Sun.sunset} alt="sunset" />
                <Time timestamp={weatherObj.sunsetDT} />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-6 border-bottom">
              High/Low:{" "}
              <span>
                {temps[1]}º / {temps[2]}º
              </span>
            </div>
            <div className="col-sm-6 border-bottom">
              Wind: <Wind info={weatherObj} units={unit} />
            </div>
          </div>
          <div className="row">
            <div className="col-sm-6 border-bottom">
              Humidity: <span>{Math.round(weatherObj.humidity)}%</span>
            </div>
            <div className="col-sm-6 border-bottom">
              Dew Point: <span>{temps[3]}º</span>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-6 border-bottom">
              Pressure: <span>{weatherObj.pressure} hPa</span>
            </div>
            <div className="col-sm-6 border-bottom">
              UV Index: <UvIndex uvIndex={weatherObj.uvIndex} />
            </div>
          </div>
          <div className="row">
            <div className="col-sm-6 border-bottom">
              Visibility:{" "}
              <Visibility visibility={weatherObj.visibility} units={unit} />
            </div>
            <div className="col-sm-6 border-bottom">
              Moon Phase: <MoonPhase moonPhase={weatherObj.moonPhase} />
            </div>
          </div>
        </div>
      </main>
    </section>
  );
}
