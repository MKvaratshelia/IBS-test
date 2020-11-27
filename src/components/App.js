import React from "react";
import { Weather } from "./Weather";
import { Form } from "./Form";
import { WeatherList } from "./WeatherList";
import { useWeatherStore } from "./weatherContext";
import { useObserver } from "mobx-react";

const App = () => {
  const weatherStore = useWeatherStore();

  return useObserver(() => (
    <div className="container">
      <h1 className="m-3 title">Информатор прогноза погоды</h1>
      <Form
        onSubmit={weatherStore.getingWeather}
        load={weatherStore.loadingButton}
        loadList={weatherStore.loadingListButton}
        onClickHandler={weatherStore.fetchData}
      />
      {weatherStore.loadingData && <Weather weather={weatherStore.weather} />}
      {weatherStore.loadListDays && (
        <WeatherList listDays={weatherStore.weatherList} />
      )}
    </div>
  ));
};

export default App;
