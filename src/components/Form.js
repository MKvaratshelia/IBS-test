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

  const handleSubmit = (e, city) => {
    props.onSubmit(e, city);
  };

  const handleClickButton = (city) => {
    props.onClickHandler(city);
  };
  return (
    <form
      className="mb-5"
      onSubmit={(e) => {
        handleSubmit(e, city);
      }}
    >
      <div className="form-group">
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
      >
        {props.load ? "Загрузка..." : "Узнать погоду"}
      </button>
      <button
        disabled={buttonDisabled}
        className="btn btn-success ml-2 button"
        type="button"
        onClick={() => handleClickButton(city)}
      >
        {props.loadList ? "Загрузка..." : "На 5 дней"}
      </button>
    </form>
  );
};
