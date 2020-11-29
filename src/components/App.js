import React from "react";
import { Weather } from "./Weather";
import { Form } from "./Form";
import { WeatherList } from "./WeatherList";
import { useWeatherStore } from "../weatherContext/weatherContext";
import { useObserver } from "mobx-react";

const App = () => {
  const weatherStore = useWeatherStore(); // получаю данные из стора

  return useObserver(() => (
    <div className="container">
      <h1 className="m-3 title">Информатор прогноза погоды</h1>
      <Form
        onClickWeather={weatherStore.getingWeather}
        load={weatherStore.loadingButton}
        loadList={weatherStore.loadingListButton}
        onClickWeatherForDays={weatherStore.getingWeatherForDays}
      />
      {weatherStore.loadingData && <Weather weather={weatherStore.weather} />}
      {weatherStore.loadListDays && (
        <WeatherList listDays={weatherStore.weatherForDays} />
      )}
    </div>
  ));
};

export default App;
