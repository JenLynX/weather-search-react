import React from "react";
import FormattedDate from "./FormattedDate";
import "./Weather.css";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="container">
        <div className="row row-cols-4">
          <div className="col">
            <ul>
              <li>Humidity: {props.data.humidity}%</li>
              <li>Wind: {Math.round(props.data.wind)} km/h</li>
            </ul>
          </div>
          <div className="col-4 text-center">
            <h5>
              <FormattedDate date={props.data.date} />
            </h5>
            <h1>{props.data.city}</h1>

            <h6 className="text-capitalize">{props.data.description}</h6>
          </div>
          <div className="col-2 text-left">
            <div>
              <WeatherIcon code={props.data.iconUrl} size={64} />
            </div>
          </div>
          <div className="col-2 text-left">
            {" "}
            <WeatherTemperature celsius={props.data.temperature} />
          </div>
        </div>
      </div>
    </div>
  );
}
