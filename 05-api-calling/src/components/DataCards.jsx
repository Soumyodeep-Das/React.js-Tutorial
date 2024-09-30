import React from "react";

const DataCards = (props) => {
  return (
    <div className="card" style={{ width: "18rem" }}>
      <div className="card-body">
        <h5 className="card-title">{props.post.title}</h5>
        <p className="card-text">
          {props.post.body}
        </p>
      </div>
    </div>
  );
};

export default DataCards;
