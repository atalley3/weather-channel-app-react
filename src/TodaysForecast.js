import "./TodaysForecast.css";

export default function TodaysForecast(props) {
  let units = props.unit;
  let dailyTemps = [
    props.info.temp.morn,
    props.info.temp.day,
    props.info.temp.eve,
    props.info.temp.night,
  ];
  //let dailyTemps = [97.6, 100.1, 86, 50.7]; //test data

  if (units === "metric") {
    dailyTemps = dailyTemps.map((temp) => Math.round((temp - 32) * (5 / 9)));
  }
  if (units === "imperial") {
    dailyTemps = dailyTemps.map((temp) => Math.round(temp));
  }

  return (
    <section className="TodaysForecast">
      <header className="header">
        <h1>Today in {props.location}</h1>
      </header>
      <main>
        <div className="row">
          <div className="col-3 fw-bold">Morning</div>
          <div className="col-3 fw-bold">Afternoon</div>
          <div className="col-3 fw-bold">Evening</div>
          <div className="col-3 fw-bold">Night</div>
        </div>
        <div className="row">
          <div className="col-3 border-end">
            <span className="todaysTemps">{dailyTemps[0]}º</span>
          </div>
          <div className="col-3 border-end">
            <span className="todaysTemps">{dailyTemps[1]}º</span>
          </div>
          <div className="col-3 border-end">
            <span className="todaysTemps">{dailyTemps[2]}º</span>
          </div>
          <div className="col-3">
            <span className="todaysTemps">{dailyTemps[3]}º</span>
          </div>
        </div>
      </main>
    </section>
  );
}
