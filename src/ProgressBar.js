import React, { useEffect, useState, useRef } from 'react';
import './ProgressBar.css';

export default function ProgressBar(props) {
  const [progress, setProgress] = useState(0);

  const interval = useRef(null);

  useEffect(() => {
    interval.current = setInterval(() => {
      setProgress((prev) => prev + 1);
    }, RnadInt(10, 120));

    return () => clearInterval(interval.current);
  }, []);

  useEffect(() => {
    if (progress >= 100) clearInterval(interval);
  }, [interval, progress]);

  useEffect(() => {
    setProgress(0);
  }, [props.restart]);

  return (
    <>
      <div className='ProgressBarContainer'>
        <div className='ProgressBar' style={{ width: progress + '%' }}></div>
      </div>
    </>
  );
}

function RnadInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
