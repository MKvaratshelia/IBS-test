import React from "react";

export const Weather = ({ weather }) => {
  return (
    <div className="card mt-4">
      <p>
        <strong>Город:</strong> {weather.city}
      </p>
      <p>
        <strong>Температура:</strong> {weather.temp} &deg;C
      </p>
      <p>
        <strong>Ветер:</strong> {weather.wind} м/с
      </p>
    </div>
  );
};
