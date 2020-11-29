import React, { useState } from "react";
import "./Form.css";

export const Form = (props) => {
  const [city, setCity] = useState("");
  const [error, setError] = useState(false);
  const [buttonDisabled, setButtonDisabled] = useState(true);

  const handleChangeCity = (e) => {
    const target = e.target.value;
    if (target.length === 0) {
      setError(true);
      setButtonDisabled(true);
    } else {
      setError(false);
      setButtonDisabled(false);
    }
    setCity(target);
  };

  return (
    <form className="mb-5">
      <div className="form-group mb-5">
        <input
          name="city"
          placeholder="Введите название города"
          type="text"
          className="form-control"
          value={city}
          onChange={handleChangeCity}
        />
        {error ? (
          <span className="error">Поле поиска не может быть пустым</span>
        ) : null}
      </div>
      <button
        disabled={buttonDisabled}
        type="submit"
        className="btn btn-primary button day"
        onClick={(e) => props.onClickWeather(e, city)}
      >
        {props.load ? "Загрузка..." : "Узнать погоду"}
      </button>
      <button
        disabled={buttonDisabled}
        className="btn btn-success ml-2 button"
        type="submit"
        onClick={(e) => props.onClickWeatherForDays(e, city)}
      >
        {props.loadList ? "Загрузка..." : "На 5 дней"}
      </button>
    </form>
  );
};
