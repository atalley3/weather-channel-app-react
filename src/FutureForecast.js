import DailyFutureForecast from "./DailyFutureForecast";
import "./FutureForecast.css";

export default function FutureForecast(props) {
  let forecast = props.forecast;
  let location = props.location;
  let units = props.units;

  let forecastMap = forecast.map((dailyForecast, index) => {
    if (index < 8) {
      return (
        <div className="col border-end" key={index}>
          <DailyFutureForecast forecast={dailyForecast} units={units} />
        </div>
      );
    } else {
      return (
        <div className="col" key={index}>
          <DailyFutureForecast forecast={dailyForecast} units={units} />
        </div>
      );
    }
  });

  return (
    <section className="FutureForecast">
      <header>
        <h1>Daily Forecast for {location}</h1>
      </header>
      <main>
        <div className="row">{forecastMap}</div>
      </main>
    </section>
  );
}
