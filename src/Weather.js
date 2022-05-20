import React, { useState } from "react";
import WeatherHero from "./WeatherHero";
import TodaysForecast from "./TodaysForecast";
import WeatherDetails from "./WeatherDetails";

function Weather(props) {
  return (
    <div className="Weather">
      <header className="search-bar">
        <form>
          <input type="Search" placeholder="Enter a city name..." />
          <input type="image" src="." />
        </form>
        <button className="btn location-btn">Current Location</button>
        <div className="btn units-btn">
          <button className="btn metric-btn">Cº</button>
          <button className="btn imperial-btn">Fº</button>
        </div>
      </header>
      <WeatherHero />
      <TodaysForecast />
      <WeatherDetails />
    </div>
  );
}
