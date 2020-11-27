import { useObserver } from "mobx-react";
import React from "react";

export const Weather = ({ weather }) => {
  // if (weather.cod === "404") {
  //   return useObserver(() => (
  //     <div className="alert alert-danger" role="alert">
  //       <span>{props.weather.message}</span>
  //     </div>
  //   ));
  // }
  return useObserver(() => (
    <div className="card mt-4">
      <p>
        <strong>Город:</strong> {weather.name}
      </p>
      <div>
        <img
          style={{ width: "50px", height: "50px", marginRight: "10px" }}
          src={`http://openweathermap.org/img/w/${weather.weather[0].icon}.png`}
          alt="Иконка погоды"
        />
        <span>{weather.weather[0].description}</span>
      </div>
      <p>
        <strong>Температура:</strong> {Math.round(weather.main.temp)} &deg;C
      </p>
      <p>
        <strong>Ветер:</strong> {Math.round(weather.wind.speed)} м/с
      </p>
    </div>
  ));
};
