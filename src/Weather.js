//import axios from "axios";
import React, { useState } from "react";
import WeatherHero from "./WeatherHero";
import TodaysForecast from "./TodaysForecast";
import WeatherDetails from "./WeatherDetails";
import FutureForecast from "./FutureForecast";
import "./Weather.css";
import TESTARR from "./testarr";

function Weather() {
  //const [city, setCity] = useState("Asheville");
  const [location, setLocation] = useState({});
  const [unit, setUnit] = useState("imperial");
  const [currentWeather, setCurrentWeather] = useState({});
  //const [forecast, setForecast] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  //const apiKey = `9e59cacf9e1dfe99b0c121a8aafc0c87`;
  //let geoURl = `http://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=${apiKey}`;
  //let oneCallUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${location.lat}&lon=${location.lon}&exclude={part}&appid=${apiKey}&units=${unit}`;

  function setImperial(event) {
    event.preventDefault();
    setUnit("imperial");
  }
  function setMetric(event) {
    event.preventDefault();
    setUnit("metric");
  }

  function handleSubmit(event) {
    event.preventDefault();
  }
  /*function updateCity(event) {
    setCity(event.target.value);
  }*/
  function defineData() {
    setLocation({
      lon: 0,
      lat: 0,
      cityName: "Asheville",
    });

    setCurrentWeather({
      dt: 1652180400,
      temp: 86.9,
      description: "mist",
      dayTemp: 87.1,
      nightTemp: 60.4,
      icon: 800,
      highTemp: 100.2,
      lowTemp: 52.7,
      pressure: 1053,
      visibility: 90,
      feelsLike: 90,
      sunriseDT: 1652161977,
      sunsetDT: 1652205595,
      wind: 6.48,
      dewPoint: 60.1,
      uvIndex: 0.73,
      moonPhase: 0.75,
      humidity: 30,
    });
    //setForecast([TESTARR]);
    setIsLoaded(true);
  }

  if (isLoaded) {
    return (
      <div className="Weather">
        <header className="searchBar">
          <div className="search-bar mx-5">
            <div className="row align-middle text-center">
              <div className="col-md-6">
                <form onSubmit={handleSubmit}>
                  <input
                    type="Search"
                    placeholder="Enter a city name..."
                    autoFocus={false}
                  />
                  <button type="submit">
                    <i className="fa-solid fa-magnifying-glass"></i>
                  </button>
                </form>
              </div>

              <div className="col-md-3">
                <button className="btn location-btn">Current Location</button>
              </div>
              <div className="col-md-3 units-btn">
                <button className="btn metric-btn" onClick={setMetric}>
                  Cº
                </button>
                <button className="btn imperial-btn" onClick={setImperial}>
                  Fº
                </button>
              </div>
            </div>
          </div>
        </header>
        <main>
          <WeatherHero
            info={currentWeather}
            unit={unit}
            location={location.cityName}
          />
          <TodaysForecast
            unit={unit}
            info={TESTARR[0]}
            location={location.cityName}
          />
          <WeatherDetails
            info={currentWeather}
            unit={unit}
            location={location.cityName}
          />
          <FutureForecast
            forecast={TESTARR}
            units={unit}
            location={location.cityName}
          />
        </main>
      </div>
    );
  } else {
    defineData();
    return <div>loading...</div>;
  }
}

export default Weather;
