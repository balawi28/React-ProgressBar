import React, { useState } from 'react';
import './ProgressBar.css';
import { useEffect } from 'react';

function ProgressBar() {
  const [progress, setProgress] = useState(3);
  const [running, setRunning] = useState(true);
  let interval;

  useEffect(() => {
    if (running) {
      interval = setInterval(() => {
        setProgress((progress) => progress + 1);
      }, 50);
    } else {
      return () => clearInterval(interval);
    }
  }, [running]);

  useEffect(() => {
    if (progress > 30) {
      setRunning(false);
      clearInterval(interval);
    }
  });

  return (
    <>
      <div className='container'>
        <div className='bar-bg'></div>
        <div className='bar-fg' style={{ width: progress + 'vw' }}></div>
      </div>
      <div>{progress}</div>
      <div>{running + ''}</div>
    </>
  );
}

export default ProgressBar;
