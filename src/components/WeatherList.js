import React from "react";

export const WeatherList = ({ listDays }) => {
  console.log(listDays);
  return (
    <div className="">
      <h2 className="mt-4">Погода на 5 дней</h2>
      <ul style={{ padding: "0px" }} className="row">
        {listDays.map((day, index) => {
          return (
            <li key={new Date() + index} className="col list-group-item">
              <p>
                <strong>Дата:</strong> {day.dt_txt}
              </p>
              <div>
                <img
                  style={{ width: "50px", height: "50px", marginRight: "10px" }}
                  src={`http://openweathermap.org/img/w/${day.weather[0].icon}.png`}
                  alt="Иконка погоды"
                />
              </div>
              <p>
                <strong>Температура:</strong> {Math.round(day.main.temp)} &deg;C
              </p>
              <p>
                <strong>Ветер:</strong> {Math.round(day.wind.speed)} м/с
              </p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
