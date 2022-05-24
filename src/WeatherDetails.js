import React from "react";
import IMAGES from "./weather-icons";
import Time from "./Time";
import MoonPhase from "./MoonPhase";
import UvIndex from "./UvIndex";
import Visibility from "./visibility";
import Wind from "./Wind";

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
      <div className="container">
        <div className="row">
          <div className="col-sm-6">Feels Like {temps[0]}º</div>
          <div className="col-sm-6">
            <div className="row">
              <div className="col-6">
                sunrise
                <img src={IMAGES.Sun.sunrise} alt="sunrise" />
                <Time timestamp={weatherObj.sunriseDT} />
              </div>
              <div className="col-6">
                sunset
                <img src={IMAGES.Sun.sunset} alt="sunset" />
                <Time timestamp={weatherObj.sunsetDT} />
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-6">
            High/Low {temps[1]}/{temps[2]}
          </div>
          <div className="col-sm-6">
            Wind: <Wind info={weatherObj} units={unit} />
          </div>
        </div>
        <div className="row">
          <div className="col-sm-6">
            Humidity: {Math.round(weatherObj.humidity)}%
          </div>
          <div className="col-sm-6">Dew Point: {temps[3]}º</div>
        </div>
        <div className="row"></div>
        <div className="col-sm-6">Pressure: {weatherObj.pressure}</div>
        <div className="col-sm-6">
          UV Index: <UvIndex uvIndex={weatherObj.uvIndex} />
        </div>
        <div className="row">
          <div className="col-sm-6">
            Visibility:{" "}
            <Visibility visibility={weatherObj.visibility} units={unit} />
          </div>
          <div className="col-sm-6">
            Moon Phase: <MoonPhase moonPhase={weatherObj.moonPhase} />
          </div>
        </div>
      </div>
    </section>
  );
}
