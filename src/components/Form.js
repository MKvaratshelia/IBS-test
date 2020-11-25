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
    setCity("");
  };
  return (
    <form onSubmit={(e) => handleSubmit(e, city)}>
      <div className="form-group">
        <input
          placeholder="Введите название города"
          name="city"
          type="text"
          className="form-control"
          value={city}
          onChange={handleChangeCity}
        />
        {error ? <span className="error">Введите название города</span> : null}
      </div>
      <button
        disabled={buttonDisabled}
        type="submit"
        className="btn btn-primary button"
      >
        {props.load ? "Загрузка..." : "Узнать погоду"}
      </button>
    </form>
  );
};
