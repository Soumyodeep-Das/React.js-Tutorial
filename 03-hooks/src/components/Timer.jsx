import React, { useState, useEffect } from "react";

const Timer = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    // Mounted
    const timer = setInterval(() => {
      setCount(count + 1);
    }, 1000);
    // Un-Mount
    return function () {
      clearInterval(timer);
    };
  }, [count]);
  return (
    <div>
      <h1>Timer</h1>
      <p>Counter: {count}</p>
    </div>
  );
};

export default Timer;
