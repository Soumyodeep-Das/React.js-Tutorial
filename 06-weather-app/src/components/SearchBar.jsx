import React from "react";

function SearchBar() {
  return (
    <div className="searchbar-container">
      <label className="search-label">City : </label>
      <input
        type="text"
        name="city-search"
        id="city-search"
        className="searchbar"
        placeholder="Ex: Kolkata"
      />
    </div>
  );
}

export default SearchBar;
