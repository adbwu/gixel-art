import { useState } from 'react';
import './App.css';
import Square from './Square';

function App() {
  const fillColors = {
    0: "rgb(14, 68, 41)", 
    1: "rgb(139, 148, 158)", 
    2: "rgb(0, 109, 50)", 
    3: "rgb(38, 166, 65)", 
    4: "rgb(57, 211, 83)"
  };

  return (
    <div className="App">
      {Array.from({ length: 10 }).map((_, index) => (
        <Square key={index} colors={fillColors} />
      ))}
    </div> 
  );
}

export default App;
