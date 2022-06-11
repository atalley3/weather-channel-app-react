import axios from "axios";
import React, { useState } from "react";
import WeatherHero from "./WeatherHero";
import TodaysForecast from "./TodaysForecast";
import WeatherDetails from "./WeatherDetails";
import FutureForecast from "./FutureForecast";
import "./Weather.css";
//import TESTARR from "./testarr";

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

  let reverseGeoSearch = async () => {
    try {
      let reverseGeoUrl = `http://api.openweathermap.org/geo/1.0/reverse?lat=${local.lat}&lon=${local.loc}&appid=${apiKey}`;
      let response = await axios.get(reverseGeoUrl);
      setLocal({ ...local, cityName: response.data[1].name });
    } catch (err) {
      console.error(err);
      console.log("reverse search error");
    }
  };
  let search = async () => {
    await geoSearch();
    await oneCallSearch();
  };

  function defineCurrentLocation(position) {
    setLocal({ lon: position.coords.lon, lat: position.coords.lat });
    reverseGeoSearch();
  }
  function getCurrentLocation() {
    navigator.geolocation.getCurrentPosition(defineCurrentLocation);
  }
  function updateCity(event) {
    setCity(event.target.value);
  }
  /*function defineData() {
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
    setForecast(TESTARR);
    setIsLoaded(true);
  }*/

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
    return <div id="loading">loading...</div>;
  }
}

export default Weather;
