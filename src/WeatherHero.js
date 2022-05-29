import React from "react";
import Time from "./Time";
import Day from "./Day";
import Icon from "./icon";
import "./WeatherHero.css";

export default function WeatherHero(props) {
  let city = props.location;
  let unit = props.unit;
  let weatherObj = props.info;
  let temps = [weatherObj.temp, weatherObj.dayTemp, weatherObj.nightTemp];
  if (unit === "metric") {
    temps = temps.map((temp) => Math.round((temp - 32) * (5 / 9)));
  }
  if (unit === "imperial") {
    temps = temps.map((temp) => Math.round(temp));
  }

  return (
    <section className="WeatherHero">
      <header>
        <h1>
          {city} as of <Time timestamp={weatherObj.dt} /> on{" "}
          <Day timestamp={weatherObj.dt} />
        </h1>
      </header>
      <main className="container ps-1">
        <div className="row">
          <div className="col-md-8">
            <ul>
              <li className="currentTemp">
                {temps[0]}º {unit === "imperial" ? "F" : "C"}
              </li>
              <li className="text-capitalize">{weatherObj.description}</li>
              <div className="d-flex">
                <li className="pe-2">
                  <span className="fw-bold">Day Temp</span> {temps[1]}º
                </li>
                <li>
                  <span className="fw-bold">Night Temp</span> {temps[2]}º
                </li>
              </div>
            </ul>
          </div>
          <div className="col-md-4 postion-relative">
            <div className="icon">
              <Icon info={weatherObj} />
            </div>
          </div>
        </div>
      </main>
    </section>
  );
}
