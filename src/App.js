import { useState } from 'react';
import './App.css';

function App() {
  const [fill, setFill] = useState("rgb(14, 68, 41)")
  
  const fillColors = [
    "rgb(14, 68, 41)", 
    "rgb(139, 148, 158)", 
    "rgb(0, 109, 50)", 
    "rgb(38, 166, 65)", 
    "rgb(57, 211, 83)"
  ];

  // onclick function to cycle fill color
  const colorCycle = () => {
    
  }

  return (
    <div className="App">
      <header className="App-header">
        <svg viewBox="0 0 100 100">
          <rect x="44.5" y="44.5" height="11" width="11" style={{ fill: '#fff' }}></rect>
        </svg>
      </header>
    </div>
  );
}

export default App;
