const API_KEY = "bf1a366ca5874c2b9a3eba8b316c1d5b";

export const createWeatherStore = () => {
  return {
    weather: {},
    loadingData: false,
    loadingButton: false,
    LoadingListButton: false,
    loadListDays: false,
    weatherForDays: {},

    async getingWeather(e, city) {
      e.preventDefault();

      this.loadingButton = true;
      this.loadListDays = false;

      try {
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric&lang=ru`
        );
        const data = await response.json();
        console.log(data);
        this.weather = { ...this.weather, ...data };

        this.loadingButton = false;
        this.loadingData = true;
      } catch (e) {
        console.log(e);
      }
    },

    async getingWeatherForDays(e, city) {
      e.preventDefault();

      this.loadingData = false;
      this.LoadingListButton = true;
      try {
        const response = await fetch(
          `http://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric&lang=ru`
        );
        const data = await response.json();
        // this.weatherForDays.push(...this.weatherForDays, ...data.list);
        this.weatherForDays = { ...this.weatherForDays, ...data };
        console.log(data);

        this.loadListDays = true;
        this.LoadingListButton = false;
      } catch (e) {
        console.log(e);
      }
    },
  };
};
