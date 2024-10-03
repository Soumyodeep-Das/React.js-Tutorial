import React from "react";

function SearchButton(props) {
  return (
    <div className="searchbutton-container">
      <button className="searchbtn" onClick={props.onClick}>Search</button>
    </div>
  );
}

export default SearchButton;
