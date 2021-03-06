import axios from "axios";
import React, { useState } from "react";
import WeatherHero from "./WeatherHero";
import TodaysForecast from "./TodaysForecast";
import WeatherDetails from "./WeatherDetails";
import FutureForecast from "./FutureForecast";
import "./Weather.css";

function Weather() {
  const [city, setCity] = useState("Asheville");
  const [local, setLocal] = useState({});
  const [unit, setUnit] = useState("imperial");
  const [currentWeather, setCurrentWeather] = useState({});
  const [forecast, setForecast] = useState();
  const [isLoaded, setIsLoaded] = useState(false);
  const apiKey = `9e59cacf9e1dfe99b0c121a8aafc0c87`;

  function setImperial(event) {
    event.preventDefault();
    setUnit("imperial");
  }
  function setMetric(event) {
    event.preventDefault();
    setUnit("metric");
  }

  let oneCallSearch = async () => {
    try {
      let oneCallUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${local.lat}&lon=${local.lon}&appid=${apiKey}&units=imperial`;
      let response = await axios.get(oneCallUrl);
      setCurrentWeather({
        dt: response.data.current.dt,
        temp: response.data.current.temp,
        description: response.data.current.weather[0].description,
        dayTemp: response.data.daily[0].temp.day,
        nightTemp: response.data.daily[0].temp.night,
        icon: response.data.current.weather[0].id,
        highTemp: response.data.daily[0].temp.max,
        lowTemp: response.data.daily[0].temp.min,
        pressure: response.data.current.pressure,
        visibility: response.data.current.visibility,
        feelsLike: response.data.current.feels_like,
        sunriseDT: response.data.current.sunrise,
        sunsetDT: response.data.current.sunset,
        wind: response.data.current.wind_speed,
        dewPoint: response.data.current.dew_point,
        uvIndex: response.data.current.uvi,
        moonPhase: response.data.daily[0].moon_phase,
        humidity: response.data.current.humidity,
      });
      setForecast(response.data.daily);
      setIsLoaded("true");
    } catch (err) {
      console.error(err);
      console.log("one call error");
    }
  };

  let geoSearch = async () => {
    try {
      let geoURl = `https://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=${apiKey}`;
      let response = await axios.get(geoURl);
      setLocal({
        lon: response.data[0].lon,
        lat: response.data[0].lat,
        cityName: response.data[0].name,
      });
      oneCallSearch();
    } catch (err) {
      console.error(err);
      console.log("location error");
    }
  };

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  let search = async () => {
    await geoSearch();
    await oneCallSearch();
  };

  function defineCurrentLocation(position) {
    setLocal({
      lon: position.coords.lon,
      lat: position.coords.lat,
      cityName: "Your Location",
    });
    oneCallSearch();
  }
  function getCurrentLocation() {
    navigator.geolocation.getCurrentPosition(defineCurrentLocation);
  }
  function updateCity(event) {
    setCity(event.target.value);
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
                    onChange={updateCity}
                  />
                  <button type="submit">
                    <i className="fa-solid fa-magnifying-glass"></i>
                  </button>
                </form>
              </div>

              <div className="col-md-3">
                <button
                  className="btn location-btn"
                  onClick={getCurrentLocation}
                >
                  Current Location
                </button>
              </div>
              <div className="col-md-3 units-btn">
                <button className="btn metric-btn" onClick={setMetric}>
                  C??
                </button>
                <button className="btn imperial-btn" onClick={setImperial}>
                  F??
                </button>
              </div>
            </div>
          </div>
        </header>
        <main>
          <WeatherHero
            info={currentWeather}
            unit={unit}
            location={local.cityName}
          />
          <TodaysForecast
            unit={unit}
            info={forecast[0]}
            location={local.cityName}
          />
          <WeatherDetails
            info={currentWeather}
            unit={unit}
            location={local.cityName}
          />
          <FutureForecast
            forecast={forecast}
            units={unit}
            location={local.cityName}
          />
        </main>
      </div>
    );
  } else {
    search();
    return <div id="loading">loading</div>;
  }
}

export default Weather;
