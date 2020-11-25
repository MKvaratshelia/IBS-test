import React from "react";

export const Weather = ({ weather }) => {
  return (
    <div className="card mt-4">
      <p>
        <strong>Город:</strong> {weather.name}
      </p>
      <div>
        <img
          style={{ width: "50px", height: "50px", marginRight: "10px" }}
          src={`http://openweathermap.org/img/w/${weather.icon}.png`}
          alt="Иконка погоды"
        />
        <span>{weather.description}</span>
      </div>
      <p>
        <strong>Температура:</strong> {weather.temp} &deg;C
      </p>
      <p>
        <strong>Ветер:</strong> {weather.wind} м/с
      </p>
    </div>
  );
};
