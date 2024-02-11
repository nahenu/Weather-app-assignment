import React from "react";
import { Line } from "react-chartjs-2";
import { Chart } from "chart.js/auto";
Chart.register({
  id: "category",

  type: "category",
});
const WeatherChart = ({ weatherData }) => {
  const data = {
    labels: weatherData.map((dataPoint) => dataPoint.date),
    datasets: [
      {
        label: "Temperature (°C)",
        data: weatherData.map((dataPoint) => dataPoint.temperature),
        borderColor: "rgb(131, 192, 192)",
        fill: false,
        yAxisID: "temperature",
      },
      {
        label: "Wind Speed (m/s)",
        data: weatherData.map((dataPoint) => dataPoint.windSpeed),
        borderColor: "rgb(94, 162, 235)",
        fill: false,
        yAxisID: "windSpeed",
      },
    ],
  };

  const options = {
    responsive: true,
    scales: {
      x: {
        title: {
          display: true,
          text: "Date",
          color: "#fff",
        },
        ticks: {
          color: "#fff",
        },
      },
      y: {
        temperature: {
          type: "linear",
          display: true,
          position: "left",
          title: {
            display: true,
            text: "Temperature (°C)",
            color: "#fff",
          },
          grid: {
            color: "#fff",
          },
          ticks: {
            color: "#fff",
          },
        },
        windSpeed: {
          type: "linear",
          display: true,
          position: "right",
          title: {
            display: true,
            text: "Wind Speed (m/s)",
            color: "#fff",
          },
          grid: {
            drawOnChartArea: false,
          },
          ticks: {
            color: "#fff",
          },
        },
      },
    },
    plugins: {
      legend: {
        labels: {
          color: "#fff",
        },
      },
    },
  };

  return (
    <div className="mt-8">
      <h2 className="text-2xl font-semibold mb-4 text-white">
        Past Weather Data
      </h2>
      <div className=" p-6 rounded-md shadow-md">
        <Line data={data} options={options} />
      </div>
    </div>
  );
};

export default WeatherChart;
