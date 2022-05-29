import "./TodaysForecast.css";

export default function TodaysForecast(props) {
  let units = props.unit;
  let temp = props.temp;
  let dailyTemps = [temp.morn, temp.day, temp.eve, temp.night];

  if (units === "metric") {
    dailyTemps = dailyTemps.map((temp) => Math.round((temp - 32) * (5 / 9)));
  }
  if (units === "imperial") {
    dailyTemps = dailyTemps.map((temp) => Math.round(temp));
  }

  return (
    <section className="TodaysForecast">
      <header>
        <h1>Today in {props.location}</h1>
      </header>
      <main>
        <div className="row">
          <div className="col-sm-3 fw-bold">Morning</div>
          <div className="col-sm-3 fw-bold">Afternoon</div>
          <div className="col-sm-3 fw-bold">Evening</div>
          <div className="col-sm-3 fw-bold">Night</div>
        </div>
        <div className="row">
          <div className="col-sm-3 border-end">
            <span className="todaysTemps">{dailyTemps[0]}º</span>
          </div>
          <div className="col-sm-3 border-end">
            <span className="todaysTemps">{dailyTemps[1]}º</span>
          </div>
          <div className="col-sm-3 border-end">
            <span className="todaysTemps">{dailyTemps[2]}º</span>
          </div>
          <div className="col-sm-3">
            <span className="todaysTemps">{dailyTemps[3]}º</span>
          </div>
        </div>
      </main>
    </section>
  );
}
