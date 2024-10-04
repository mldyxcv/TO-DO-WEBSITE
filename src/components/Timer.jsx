import React, { useState, useEffect } from 'react';

const Timer = () => {
  const [isActive, setIsActive] = useState(false);
  const [time, setTime] = useState(0); 

  useEffect(() => {
    let interval = null;
    if (isActive) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    } else if (!isActive && time !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, time]);

  const handleStart = () => {
    setIsActive(true);
  };

  const handlePause = () => {
    setIsActive(false);
  };

  const handleReset = () => {
    setIsActive(false);
    setTime(0);
  };

  const formatTime = (time) => {
    const hours = Math.floor(time / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = time % 60;

    return { hours, minutes, seconds };
  };

  const { hours, minutes, seconds } = formatTime(time);

  return (
    <div className="timer-box border p-4 rounded-md shadow-md bg-p">
      <h2 className="text-lg font-semibold">Timer</h2>
      <div className="flex gap-2 mt-2">
        <div>
          <span className="text-3xl">{String(hours).padStart(2, '0')}</span>:<span className="text-3xl">{String(minutes).padStart(2, '0')}</span>:<span className="text-3xl">{String(seconds).padStart(2, '0')}</span>
        </div>
      </div>
      <div className="flex gap-2 mt-4">
        <button onClick={handleStart} className="bg-green-500 text-white rounded px-4 py-2">Start</button>
        <button onClick={handlePause} className="bg-yellow-500 text-white rounded px-4 py-2">Pause</button>
        <button onClick={handleReset} className="bg-red-500 text-white rounded px-4 py-2">Reset</button>
      </div>
    </div>
  );
};

export default Timer;
