import axios from "axios";
import React, { useState } from "react";
import WeatherHero from "./WeatherHero";
import TodaysForecast from "./TodaysForecast";
import WeatherDetails from "./WeatherDetails";
import "./Weather.css";

function Weather(props) {
  const [city, setCity] = useState(props.defaultCity);
  const [location, setLocation] = useState({});
  const [unit, setUnit] = useState("imperial");
  const [currentWeather, setCurrentWeather] = useState({});
  const [isloaded, setIsLoaded] = useState(false);
  const apiKey = `bcdada43905d3c2d7aa9f45a7ce30f8b`;
  let geoURl = `http://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=${apiKey}`;
  let oneCallUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${location.lat}&lon=${location.lon}&exclude={part}&appid=${apiKey}&units=${unit}`;

  function handleGeoPostionrepsonse(response) {
    setLocation({
      lon: response.data[0].lon,
      lat: response.data[0].lat,
      cityName: response.data[0].name,
    });
    axios.get(oneCallUrl).then(handleCurrentWeatherResponse);
  }

  function reverseGeoPositonSearch(response) {
    let lat = response.coords.latitude;
    let lon = response.coords.longitude;
    let reverseGeoUrl = `http://api.openweathermap.org/geo/1.0/reverse?lat=${lat}&lon=${lon}&appid=${apiKey}`;
    axios.get(reverseGeoUrl).then(handleGeoPostionrepsonse);
  }
  function getGeoPostion(event) {
    event.preventDefault();
    navigator.geolocation.getCurrentPosition(reverseGeoPositonSearch);
  }
  function handleCurrentWeatherResponse(response) {
    setCurrentWeather({
      dt: response.data.current.dt,
      temp: response.data.current.temp,
      description: response.data.current.description,
      dayTemp: response.data.daily[0].temp.day,
      nightTemp: response.data.daily[0].temp.night,
      icon: response.data.current.weather[0].icon,
      highTemp: response.data.daily[0].temp.max,
      lowTemp: response.data.daily[0].temp.min,
      pressure: response.data.current.pressure,
      visibility: response.data.current.visibility,
      feelsLike: response.data.current.feels_like,
      sunriseDT: response.data.current.sunrise,
      sunsetDT: response.data.current.sunset,
      wind: response.data.current.wind_speed,
      dewPoint: response.data.current.dew_point,
      uvIndex: response.data.daily[0].uvi,
      moonPhase: response.data.daily[0].moon_phase,
      precipitation: response.data.daily[0].pop,
    });
  }
  function setImperial(event) {
    event.preventDefault();
    setUnit("imperial");
  }
  function setMetric(event) {
    event.preventDefault();
    setUnit("metric");
  }
  function handleLocationSearch(response) {
    setLocation({
      lon: response.data[0].lon,
      lat: response.data[0].lat,
      cityName: response.data[0].name,
    });
    axios.get(oneCallUrl).then(handleCurrentWeatherResponse);
  }
  function handleSubmit(event) {
    event.preventDefault();
    axios.get(geoURl).then(handleLocationSearch);
  }
  function updateCity(event) {
    setCity(event.target.value);
  }

  if (isloaded) {
    return (
      <div className="Weather">
        <header>
          <div className="search-bar mx-5">
            <div className="row align-middle text-center">
              <div className="col-md-6">
                <form onSubmit={handleSubmit}>
                  <input
                    type="Search"
                    placeholder="Enter a city name..."
                    onChange={updateCity}
                    autoFocus={false}
                  />
                  <button type="submit">
                    <i class="fa-solid fa-magnifying-glass"></i>
                  </button>
                </form>
              </div>

              <div className="col-md-3">
                <button className="btn location-btn" onClick={getGeoPostion}>
                  Current Location
                </button>
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
          <TodaysForecast unit={unit} />
          <WeatherDetails info={currentWeather} unit={unit} />
        </main>
      </div>
    );
  } else {
    axios
      .get(geoURl)
      .then(handleLocationSearch)
      .then(() => setIsLoaded(true));
    return <div className="Weather">Loading...</div>;
  }
}

export default Weather;
