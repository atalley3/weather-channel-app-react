import IMAGES from "./weather-icons";

export default function MoonPhase(props) {
  let moonPhase = props.moonPhase;
  moonPhase = Math.round(moonPhase * 8);
  let imageArr = [
    "newMoon",
    "waxingCrescent",
    "firstQuarter",
    "waxingGibbious",
    "full",
    "waningGibbous",
    "lastQuarter",
    "waningCrescent",
    "newMoon",
  ];
  let imageAlt = [
    "new moon",
    "waxing crescent",
    "first quarter",
    "waxing gibbous",
    "full moon",
    "waning gibbous",
    "last quarter",
    "waning crescent",
    "new moon",
  ];
  let resultAlt = imageAlt[moonPhase];
  let imgSrc = IMAGES.Moon[imageArr[moonPhase]];
  return (
    <span className="MoonPhase">
      <img src={imgSrc} alt={resultAlt} />
      {resultAlt}
    </span>
  );
}
