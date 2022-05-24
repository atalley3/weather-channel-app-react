export default function Visibility(props) {
  let units = props.units;
  let visibility = props.visibility;

  if (units === "metric") {
    let visibilityKM = Math.round(visibility / 1000);
    return (
      <span className="Visibility">
        {visibility} meters or {visibilityKM} KM
      </span>
    );
  }
  if (units === "imperial") {
    visibility = Math.round(visibility / 1609);
    return <span className="Visibiltiy"> {visibility} statue miles</span>;
  }
}
