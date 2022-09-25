import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";

export default function WeatherForecast() {
  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          <div className="Forecast-day">Mon</div>
          <WeatherIcon code="09d" size={46} />
          <div className="Forecast-temp">
            <span className="Forecast-temp-max">20° </span>
            <span className="Forecast-temp-min">10°</span>
          </div>
        </div>
      </div>
    </div>
  );
}
