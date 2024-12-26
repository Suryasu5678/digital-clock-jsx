import React, { useEffect } from "react";
import "./App.css";

const DigitalClock = ({ setCount, count }) => {
  useEffect(() => {
    const timer = setInterval(() => {
      const currentTime = new Date();

      setCount({
        hours: currentTime.getHours(),
        minutes: currentTime.getMinutes(),
        seconds: currentTime.getSeconds(),
      });
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, []);
  const formatTime = (unit) => (unit < 10 ? `0${unit}` : unit);

  return (
    <div
      style={{
        display: "flex",
        flexDirection:'column',
        alignItems: "center",
        
        
      }}
    >
      <h1
        style={{
          fontFamily:
            "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
          color: "red",
          background: "lightblue",
      
        }}
      >
        Digital Clock
      </h1>
      <div className="mainContainer">
        <div className="container">
          {formatTime(count.hours)}:{formatTime(count.minutes)}:
          {formatTime(count.seconds)}
        </div>
      </div>
    </div>
  );
};

export default DigitalClock;
