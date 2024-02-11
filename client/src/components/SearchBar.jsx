import React, { useState } from "react";

const SearchBar = ({ onSearch }) => {
  const [city, setCity] = useState("");

  const handleChange = (e) => {
    setCity(e.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (city.trim() !== "") {
      onSearch(city);
      setCity("");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex items-center justify-center w-full max-w-md mx-auto mb-12 sm:mb-20 p-4 rounded-lg"
    >
      <div className="relative">
        <input
          type="text"
          placeholder="Enter city name"
          value={city}
          onChange={handleChange}
          className="w-full border border-gray-600 rounded-l py-2 pl-12 pr-4 focus:outline-none focus:border-blue-500 bg-gray-900 text-white"
        />
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <svg
            className="w-4 h-4 text-gray-500"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="10" />
            <line x1="15" y1="9" x2="9" y2="15" />
            <line x1="9" y1="9" x2="15" y2="15" />
          </svg>
        </div>
      </div>
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded-r focus:outline-none hover:bg-blue-600"
      >
        Search
      </button>
    </form>
  );
};

export default SearchBar;
