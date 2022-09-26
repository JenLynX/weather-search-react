import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";

export default function WeatherForecastDay(props) {
  function maxTemp() {
    let temperature = Math.round(props.data.temp.max);
    return `${temperature}°`;
  }
  function minTemp() {
    let temperature = Math.round(props.data.temp.min);
    return `${temperature}°`;
  }
  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();

    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return days[day];
  }

  return (
    <div>
      <div className="Forecast-day">{day()}</div>
      <WeatherIcon code={props.data.weather[0].icon} size={46} />
      <div className="Forecast-temp">
        <span className="Forecast-temp-max">{maxTemp()} </span>
        <span className="Forecast-temp-min">{minTemp()}</span>
      </div>
    </div>
  );
}
