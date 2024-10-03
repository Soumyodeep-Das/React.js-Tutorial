import React from "react";
import { useWeather } from '../context/Weather'


function SearchBar() {
    const weather = useWeather()
  return (
    <div className="searchbar-container">
      <label className="search-label">City : </label>
      <input
        type="text"
        name="city-search"
        id="city-search"
        className="searchbar"
        placeholder="Ex: Kolkata"
        value={weather.city}
        onChange={(e) => weather.setCity(e.target.value)}
      />
    </div>
  );
}

export default SearchBar;
