import React from 'react';
import { useState } from 'react';

const Square = (props) => {
  const [fill, setFill] = useState(0)

  // onclick function to cycle fill color
  const colorCycle = () => {
    fill < 4 ? setFill(fill + 1) : setFill(0);
  };

  return (
    <svg 
    onClick={[() => colorCycle()]}
    >
    <rect height="11px" width="11px" 
    fill={props.fill}
    ></rect>
  </svg>
  );
};

export default Square;