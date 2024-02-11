import React, { useState } from "react";
import TemperatureConvert from "./TemperatureConvert";

const WeatherCard = ({ weather }) => {
  const [temperature, setTemprature] = useState(true);
  const handleTemperature = (temp) => {
    setTemprature(temp === "celsius" ? true : false);
  };
  return (
    <div className="bg-black p-6 rounded-md shadow-md w-11/12  md:w-4/12 mx-auto my-4 text-white">
      <h2 className="text-2xl font-semibold mb-4 text-center text-white">
        {weather.city}
      </h2>
      <div className="flex flex-col sm:flex-row justify-between gap-3 sm:justify-around">
        <p className="text-lg mb-2  sm:mb-0">
          Temperature:{" "}
          {temperature
            ? `${weather.temperature}°C`
            : `${weather.temperature * 1.8 + 32 / 32}°F`}
        </p>
        <p className="text-lg mb-2 sm:mb-0">Conditions: {weather.conditions}</p>
      </div>
      <div className="flex justify-between">
        <p className="text-lg">Wind Speed: {weather.windSpeed} m/s</p>
      </div>
      <TemperatureConvert handleTemperature={handleTemperature} />
    </div>
  );
};

export default WeatherCard;
