import React from "react";

const DataCards = (props) => {
  return (
    <div classNameName="card" style={{ width: "18rem" }}>
      <div classNameName="card-body">
        <h5 classNameName="card-title">{props.post.title}</h5>
        <p classNameName="card-text">
          {props.post.body}
        </p>
      </div>
    </div>
  );
};

export default DataCards;
