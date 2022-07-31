import React, { useEffect, useState } from 'react';
import './ProgressBar.css';

export default function ProgressBar() {
  const [running, setRunning] = useState(true);
  const [progress, setProgress] = useState(0);

  let interval;

  useEffect(() => {
    if (running) {
      interval = setInterval(() => {
        setProgress((prev) => prev + 1);
      }, RnadInt(10, 120));
    }
  }, []);

  useEffect(() => {
    if (progress >= 100) {
      setRunning(false);
      clearInterval(interval);
    }
  }, [progress]);

  return (
    <div className='ProgressBarContainer'>
      <div className='ProgressBar' style={{ width: progress + '%' }}></div>
    </div>
  );
}

function RnadInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
