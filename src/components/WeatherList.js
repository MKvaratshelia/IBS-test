import React from "react";

export const WeatherList = (props) => {
  return (
    <div className="">
      <h2 className="mt-4">Погода на 5 дней</h2>
      <div style={{ padding: "0px" }} className="row">
        {props.listDays.map((weather, index) => {
          return (
            <div key={Math.random() + index} className="card cards_item m-2">
              <div className="card-body">
                <p>
                  <strong>Дата:</strong> {weather.dt_txt}
                </p>
                <div>
                  <img
                    style={{
                      width: "50px",
                      height: "50px",
                      marginRight: "10px",
                    }}
                    src={`http://openweathermap.org/img/w/${weather.weather[0].icon}.png`}
                    alt="Иконка погоды"
                  />
                  <span>{weather.weather[0].description}</span>
                </div>
                <p>
                  <strong>Температура:</strong> {Math.round(weather.main.temp)}{" "}
                  &deg;C
                </p>
                <p>
                  <strong>Ветер:</strong> {Math.round(weather.wind.speed)} м/с
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
