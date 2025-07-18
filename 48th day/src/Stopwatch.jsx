import React, { useState, useEffect, useRef } from "react";

function Stopwatch() {
  const [isRunning, setIsRunning] = useState(false);
  const [elapsedTime, setElapsedTime] = useState(0);

  const intervalIdRef = useRef(null);
  const startTimeRef = useRef(0);

  useEffect(() => {
    if (isRunning) {
      startTimeRef.current = Date.now() - elapsedTime;

      intervalIdRef.current = setInterval(() => {
        setElapsedTime(Date.now() - startTimeRef.current);
      }, 10);
    }

    return () => {
      clearInterval(intervalIdRef.current);
    };
  }, [isRunning]);

  function start() {
    setIsRunning(true);
  }

  function stop() {
    setIsRunning(false);
  }

  function reset() {
    setIsRunning(false); // ✅ Corrected function name
    setElapsedTime(0);
  }

  function formatTime() {
   //const hours = Math.floor(elapsedTime / (1000 * 60 * 60));
    const minutes = Math.floor((elapsedTime / (1000 * 60)) % 60);
    const seconds = Math.floor((elapsedTime / 1000) % 60);
    const milliseconds = Math.floor((elapsedTime % 1000) / 10);

    const pad = (num) => String(num).padStart(2, '0');

    return `${pad(minutes)}:${pad(seconds)}:${pad(milliseconds)}`;
  }

  return (
    <div className="stopwatch">
      <h1>Stopwatch</h1>
      <div className="display">{formatTime()}</div>
      <div className="controls">
        <button onClick={start} className="start">Start</button>
        <button onClick={stop} className="stop">Stop</button>
        <button onClick={reset} className="reset">Reset</button>
      </div>
    </div>
  );
}

export default Stopwatch;
