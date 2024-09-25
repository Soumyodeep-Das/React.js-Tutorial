import React from "react";
import crossImage from "../assets/Cross.png"; // Update with actual path
import circleImage from "../assets/Circle.png"; // Update with actual path

const Square = (props) => {
  const renderImage = () => {
    if (props.value === "X") {
      return <img src={crossImage} alt="X" style={{ height: "80%", width: "80%" }} />;
    } else if (props.value === "O") {
      return <img src={circleImage} alt="O" style={{ height: "80%", width: "80%" }} />;
    }
    return null;
  };

  return (
    <div
      onClick={props.onClick}
      style={{
        border: "1px solid",
        height: "100px",
        width: "100px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
      className="square"
    >
      {renderImage()}
    </div>
  );
};

export default Square;
