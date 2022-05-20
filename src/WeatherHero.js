import React from "react";
import "./WeatherHero.css";

export default function WeatherHero() {
  return (
    <section className="WeatherHero">
      <header>
        <h1>Asheville as of 1:00 pm on 5/20/22</h1>
      </header>
      <main className="container">
        <div className="row">
          <div className="col-md-8">
            <ul>
              <li>90 degrees F</li>
              <li>Sunny and Hot AF</li>
              <div className="d-flex">
                <li>
                  <span>Day Temp</span> 95
                </li>
                <li>
                  <span>NightTemp</span> 65
                </li>
              </div>
            </ul>
          </div>
          <div className="col-md-4">icon</div>
        </div>
      </main>
    </section>
  );
}
