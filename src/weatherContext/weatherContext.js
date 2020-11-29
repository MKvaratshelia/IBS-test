import React from "react";
import { createWeatherStore } from "../store/weatherStore";
import { useLocalStore } from "mobx-react";
const WeatherContext = React.createContext(null);

export const WeatherProvider = ({ children }) => {
  const weatherStore = useLocalStore(createWeatherStore);
  return (
    <WeatherContext.Provider value={weatherStore}>
      {children}
    </WeatherContext.Provider>
  );
};

export const useWeatherStore = () => React.useContext(WeatherContext);
