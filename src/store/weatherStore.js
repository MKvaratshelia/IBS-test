const API_KEY = "bf1a366ca5874c2b9a3eba8b316c1d5b";

export const createWeatherStore = () => {
  return {
    weather: {},
    loadingData: false,
    loadingButton: false,
    LoadingListButton: false,
    loadListDays: false,
    weatherList: [],

    async getingWeather(e, city) {
      e.preventDefault();
      this.setLoadingButton(true);
      try {
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric&lang=ru`
        );
        const data = await response.json();
        console.log(data);
        this.weather = { ...this.weather, ...data };
        this.setLoadingData(true);
        this.setLoadingButton(false);
      } catch (e) {
        console.log(e);
      }
    },
    setLoadingData(boolean) {
      this.loadingData = boolean;
    },
    setLoadingButton(boolean) {
      this.loadingButton = boolean;
    },
    setLoadingListButton(boolean) {
      this.loadingListButton = boolean;
    },
    setLoadListDays(boolean) {
      this.loadListDays = boolean;
    },

    async fetchData(city) {
      this.setLoadingData(false);
      this.setLoadingListButton(true);
      try {
        const response = await fetch(
          `http://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric&lang=ru`
        );
        const data = await response.json();
        this.weatherList.push(...this.weatherList, ...data.list);
        this.setLoadingListButton(false);
        this.setLoadListDays(true);
      } catch (e) {
        console.log(e);
      }
    },
  };
};
