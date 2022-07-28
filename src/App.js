import './App.css';
import ProgressBar from './ProgressBar';
import { useState } from 'react';

function App() {
  return (
    <div className='App'>
      <div className='buttons'>
        <button className='button-add'>Add</button>
        <button className='button-delete'>Delete</button>
        <input type='number' />
      </div>
      <ProgressBar />
    </div>
  );
}

export default App;
