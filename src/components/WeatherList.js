import React from "react";

export const WeatherList = ({ listDays }) => {
  console.log(listDays);
  return (
    <div className="">
      <h2 className="mt-4">Погода на 5 дней</h2>
      <div style={{ padding: "0px" }} className="row">
        {listDays.map((day, index) => {
          return (
            <div key={Math.random() + index} className="card cards_item m-2">
              <div className="card-body">
                <p>
                  <strong>Дата:</strong> {day.dt_txt}
                </p>
                <div>
                  <img
                    style={{
                      width: "50px",
                      height: "50px",
                      marginRight: "10px",
                    }}
                    src={`http://openweathermap.org/img/w/${day.weather[0].icon}.png`}
                    alt="Иконка погоды"
                  />
                  <span>{day.weather[0].description}</span>
                </div>
                <p>
                  <strong>Температура:</strong> {Math.round(day.main.temp)}{" "}
                  &deg;C
                </p>
                <p>
                  <strong>Ветер:</strong> {Math.round(day.wind.speed)} м/с
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
