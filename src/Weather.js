import React from "react";
//import WeatherHero from "./WeatherHero";
//import TodaysForecast from "./TodaysForecast";
//import WeatherDetails from "./WeatherDetails";
//import axios from "axios";
import "./Weather.css";

function Weather() {
  //const [city, setCity] = useState(props.defaultCity);
  return (
    <div className="Weather">
      <header>
        <div className="search-bar mx-5">
          <div className="row align-middle text-center">
            <div className="col-md-6">
              <form>
                <input type="Search" placeholder="Enter a city name..." />
                <button>
                  <i class="fa-solid fa-magnifying-glass"></i>
                </button>
              </form>
            </div>

            <div className="col-md-3">
              <button className="btn location-btn">Current Location</button>
            </div>
            <div className="col-md-3 units-btn">
              <button className="btn metric-btn">Cº</button>
              <button className="btn imperial-btn">Fº</button>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Weather;
