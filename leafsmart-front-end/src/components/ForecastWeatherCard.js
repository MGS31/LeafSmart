import { React } from "react";

//a component for each daily weather
export default function ForecastWeatherCard(props) {
  const formatTemp = () => {
    return Math.round(props.temp);
  };
//console.log(props)
  return (
    <li className="p-2">
      <img className="h-10 w-10 mb-1" alt="daily weather" src={`/icons/${props.icon}.svg`} />
      {/* <p className="text-xs">{props.description}</p> */}
      <p className="text-xs">{formatTemp(props.temp)}°C</p>
      <p className="text-xs">{props.day}</p>
    </li>
  );
}
