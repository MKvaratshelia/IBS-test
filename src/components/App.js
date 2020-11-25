import React, { useState } from "react";
import { Weather } from "./Weather";
import { Form } from "./Form";
import { WeatherList } from "./WeatherList";

const API_KEY = "bf1a366ca5874c2b9a3eba8b316c1d5b";
function App() {
  const [weather, setWeather] = useState({
    name: "",
    temp: "",
    wind: "",
    icon: "",
  });

  const [loadingData, setLoadingData] = useState(false);
  const [loading, setLoading] = useState(false);
  const [loadListDays, setLoadListDays] = useState(false);
  const [ListDays, setListDays] = useState([]);
  const [loadListButton, setLoadListButton] = useState(false);

  const getingWeather = async (e, city) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric&lang=ru`
      );
      const data = await response.json();
      console.log(data);
      setWeather((prev) => {
        return {
          ...prev,
          name: data.name,
          temp: Math.round(data.main.temp),
          wind: Math.round(data.wind.speed),
          icon: data.weather[0].icon,
          description: data.weather[0].description,
        };
      });
      setLoadingData(true);
      setLoading(false);
      setLoadListDays(false);
    } catch (e) {
      console.log(e);
      setLoadingData(false);
    }
  };

  const fetchData = async (city) => {
    setLoadListButton(true);
    try {
      const response = await fetch(
        `http://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric&lang=ru`
      );
      const data = await response.json();
      setListDays(data.list);
      setLoadListDays(true);
      setLoadListButton(false);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="container">
      <h1 className="mb-3">Приложение погоды</h1>
      <Form
        onSubmit={getingWeather}
        load={loading}
        loadList={loadListButton}
        onClickHandler={fetchData}
      />
      {loadingData && <Weather weather={weather} />}
      {loadListDays && <WeatherList listDays={ListDays} />}
    </div>
  );
}

export default App;
