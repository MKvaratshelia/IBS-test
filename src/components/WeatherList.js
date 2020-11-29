import React from "react";
import { Weather } from "./Weather";

export const WeatherList = (props) => {
  return (
    <section className="">
      <h2 className="mt-4">Погода на 5 дней</h2>
      <div style={{ padding: "0px" }} className="row justify-content-between">
        {props.listDays.list.map((weather, index) => {
          return (
            <Weather
              key={Math.random() + index}
              weather={weather}
              city={props.listDays.city.name}
            />
          );
        })}
      </div>
    </section>
  );
};
