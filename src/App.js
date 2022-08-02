import React, { useState } from 'react';
import ProgressBar from './ProgressBar';
import './App.css';

var idCounter = 0;

export default function App() {
  const [barsArray, setBarsArray] = useState([]);
  const [input, setInput] = useState('');

  function add() {
    setBarsArray((prev) => [...prev, { id: idCounter++, restart: false }]);
  }

  function remove() {
    setBarsArray((prev) =>
      prev.filter((bar) => bar.id.toString() !== input.toString())
    );
  }

  async function reset() {
    await setBarsArray((prev) =>
      prev.map((bar) => {
        return bar.id.toString() === input.toString()
          ? { ...bar, restart: true }
          : { ...bar };
      })
    );
    await setBarsArray((prev) =>
      prev.map((bar) => {
        return bar.id.toString() === input.toString()
          ? { ...bar, restart: false }
          : { ...bar };
      })
    );
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
          <div className='bars-index' key={bar.id}>
            <ProgressBar key={bar.id} restart={bar.restart} />
            <p>{bar.id}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
