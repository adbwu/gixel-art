import { useState } from 'react';
import './App.css';

function App() {
  const fillColors = {
    0: "rgb(14, 68, 41)", 
    1: "rgb(139, 148, 158)", 
    2: "rgb(0, 109, 50)", 
    3: "rgb(38, 166, 65)", 
    4: "rgb(57, 211, 83)"
  };

  const [fill, setFill] = useState(0)
  

  // onclick function to cycle fill color
  const colorCycle = () => {
    fill < 4 ? setFill(fill + 1) : setFill(0);
  };

  return (
    <div className="App">
      <header className="App-header">
        <svg 
          onClick={() => colorCycle()}
          >
          <rect height="11px" width="11px" 
          style={{ fill: `${fillColors[fill]}` }} 
          ></rect>
        </svg>
        <svg>          
          <rect height="11px" width="11px" 
          style={{ fill: `${fillColors[fill]}` }} 
          onClick={colorCycle}></rect></svg>
      </header>
    </div>
  );
}

export default App;
