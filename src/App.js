import React, { useState } from 'react';
import ProgressBar from './ProgressBar';
import './App.css';

var idCounter = 0;

export default function App() {
  const [barsArray, setBarsArray] = useState([]);
  const [input, setInput] = useState('');

  function add() {
    setBarsArray((prev) => [...prev, <ProgressBar key={idCounter++} />]);
  }

  function remove() {
    setBarsArray((prev) => prev.filter((bar) => bar.key !== input));
  }

  function reset() {
    setBarsArray((prev) => prev.filter((bar) => bar.key !== input));
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
        <button className='button-delete' onClick={reset}>
          Reset
        </button>
        <input
          type='number'
          value={input}
          onInput={(e) => setInput(e.target.value)}
        />
      </div>
      <div className='bars-container'>
        {barsArray.map((bar) => (
          <div className='bars-index' key={bar.key}>
            {bar}
            <p>{bar.key}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
