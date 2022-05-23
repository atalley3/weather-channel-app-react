import React from "react";
import IMAGES from "./weather-icons";
import Time from "./Time";

export default function WeatherDetails(props) {
  let weatherObj = props.info;
  let unit = props.unit;
  let temps = [weatherObj.feelsLike, weatherObj.highTemp, weatherObj.lowTemp];
  if (unit === "metric") {
    temps = temps.map((temp) => Math.round((temp - 32) * (5 / 9)));
  }
  if (unit === "imperial") {
    temps = temps.map((temp) => Math.round(temp));
  }

  return (
    <section className="WeatherDetails">
      <header>
        <h2>Today's Details ...</h2>
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
            Wind: {Math.round(weatherObj.wind)}make into component
          </div>
        </div>
        <div className="row">
          <div className="col-sm-6">
            Humidity: {Math.round(weatherObj.humidity)}%
          </div>
          <div className="col-sm-6">
            Dew Point: {Math.round(weatherObj.dewPoint)}
          </div>
        </div>
        <div className="row"></div>
        <div className="col-sm-6">Pressure: {weatherObj.pressure}</div>
        <div className="col-sm-6">UV Index: {weatherObj.uvIndex} out of 10</div>
        <div className="row">
          <div className="col-sm-6">Visibility: {weatherObj.visibility}</div>
          <div className="col-sm-6">Moon Phase: {weatherObj.moonPhase}</div>
        </div>
      </div>
    </section>
  );
}
