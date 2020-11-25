import React, { useState } from "react";
import { Weather } from "./Weather";
import { Form } from "./Form";

const API_KEY = "bf1a366ca5874c2b9a3eba8b316c1d5b";
function App() {
  const [weather, setWeather] = useState({
    city: "",
    temp: "",
    wind: "",
  });
  const [loadingData, setLoadingData] = useState(false);
  const [loading, setLoading] = useState(false);

  const getingWeather = async (e, city) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      );
      const data = await response.json();
      console.log(data);
      setWeather((prev) => {
        return {
          ...prev,
          city: data.name,
          temp: Math.round(data.main.temp),
          wind: Math.round(data.wind.speed),
        };
      });
      setLoadingData(true);
      setLoading(false);
    } catch (e) {
      console.log(e);
      setLoadingData(false);
    }
  };

  console.log(weather);

  return (
    <div className="container">
      <h1>Погода</h1>
      <Form onSubmit={getingWeather} load={loading} />
      {loadingData && <Weather weather={weather} />}
    </div>
  );
}

export default App;
