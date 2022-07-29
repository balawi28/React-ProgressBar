import React, { Fragment, useState } from 'react';
import ProgressBar from './ProgressBar';
import './App.css';

var barToRemove = 0;

export default function App() {
  const [barsArray, setBarsArray] = useState([]);

  function add() {
    setBarsArray((prev) => [...prev, prev.length]);
  }

  function remove() {
    setBarsArray((prev) => prev.filter((_, index) => index !== barToRemove));
  }

  return (
    <div className='App'>
      <div className='buttons'>
        <button className='button-add' onClick={add}>
          Add
        </button>
        <button className='button-delete' onClick={remove}>
          Delete
        </button>
        <input type='number' />
      </div>
      <div className='bars-container'>
        {barsArray.map((bar) => (
          <div className='bars-index'>
            <ProgressBar />
            <p>{bar}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
