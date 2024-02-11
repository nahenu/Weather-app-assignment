import React, { useState, useEffect } from "react";
import SearchBar from "./components/SearchBar";
import WeatherCard from "./components/WeatherCard";
import WeatherChart from "./components/WeatherChart";
import { fetchWeather, fetchPastWeather } from "./utils/api";
const App = () => {
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(null);
  const [weatherData, setWeatherData] = useState([]);
  const [recentSearches, setRecentSearches] = useState([]);

  const handleSearch = async (city) => {
    try {
      const weatherData = await fetchWeather(city);
      const pastWeatherData = await fetchPastWeather(city);
      const updatedSearches = [city, ...recentSearches.slice(0, 4)];
      setRecentSearches(updatedSearches);
      setWeather(weatherData);
      setWeatherData(pastWeatherData);
      setError(null);
    } catch (err) {
      setError(err.message);
    }
  };

  useEffect(() => {
    handleSearch("London");
  }, []);

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-4xl font-bold mb-8 text-center text-white">
        Weather App
      </h1>
      <div className="container  px-4 ">
        <SearchBar onSearch={handleSearch} />
        <div className="flex flex-col sm:flex-row justify-center gap-2 items-center">
          <h1 className="text-2xl font-bold text-white ">Recent Searches :</h1>
          <ul className="  text-center flex gap-2 text-white ">
            {recentSearches.map((city, index) => (
              <li key={index} className="py-2 ">
                {city}
              </li>
            ))}
          </ul>
        </div>
      </div>
      {error && <div className="text-red-500 text-center mt-4">{error}</div>}
      {weather && <WeatherCard weather={weather} />}
      {weatherData.length > 0 && <WeatherChart weatherData={weatherData} />}
    </div>
  );
};

export default App;
