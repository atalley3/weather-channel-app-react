import React from "react";
import "./WeatherHero.css";

export default function WeatherHero(props) {
  let city = props.location;
  let unit;
  if (props.unit === "imperial") {
    unit = "F";
  } else {
    unit = "C";
  }
  let weatherArr = props.info;
  return (
    <section className="WeatherHero">
      <header>
        <h1>{city} as of 1:00 pm on 5/20/22</h1>
      </header>
      <main className="container ps-1">
        <div className="row">
          <div className="col-md-8">
            <ul>
              <li className="currentTemp">
                {weatherArr.temp}º {unit}
              </li>
              <li>{weatherArr.description}</li>
              <div className="d-flex">
                <li className="pe-2">
                  <span className="fw-bold">Day Temp</span> {weatherArr.dayTemp}
                  º
                </li>
                <li>
                  <span className="fw-bold">NightTemp</span>
                  {weatherArr.nightTemp}º
                </li>
              </div>
            </ul>
          </div>
          <div className="col-md-4 position-relative">
            <div className="icon">icon</div>
          </div>
        </div>
      </main>
    </section>
  );
}
