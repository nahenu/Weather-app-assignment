import axios from "axios";

const API_KEY = "3a87c40af448a81a6a0ed10a37c8ca1e";

const fetchWeather = async (city) => {
  try {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    );

    const { main, weather, wind } = response.data;
    return {
      city,
      temperature: main.temp,
      conditions: weather[0].main,
      windSpeed: wind.speed,
    };
  } catch (err) {
    throw new Error("City not found");
  }
};

const fetchPastWeather = async (city) => {
  try {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric`
    );
    return response.data.list.map((item) => ({
      date: item.dt_txt,
      temperature: item.main.temp,
      windSpeed: item.wind.speed,
    }));
  } catch (err) {
    console.error("Error fetching past weather data:", err);
    throw new Error("Error fetching past weather data");
  }
};

export { fetchWeather, fetchPastWeather };
