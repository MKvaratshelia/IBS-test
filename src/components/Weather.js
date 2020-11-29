import { useObserver } from "mobx-react";
import React from "react";

export const Weather = ({ weather, city }) => {
  const date = new Date();

  return useObserver(() => (
    <div className="card mt-4 cards_item">
      <div className="card-body">
        {weather.name ? (
          <p>
            <strong>Город:</strong> {weather.name}
          </p>
        ) : (
          <p>
            <strong>Город:</strong> {city}
          </p>
        )}
        <p>
          <strong>Дата:</strong>{" "}
          {`${date.getDate(weather.dt)}/${
            date.getMonth(weather.dt) + 1
          }/${date.getFullYear(weather.dt)}`}
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
    </div>
  ));
};
