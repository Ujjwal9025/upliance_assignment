import React, { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import './Counter.css';

const Counter: React.FC = () => {
  const [count, setCount] = useState<number>(0); // State to hold the count value

  useEffect(() => {
    // Function to calculate the background color based on the count value
    const calculateBackgroundColor = (): string => {
      const level = Math.min(count * 10, 100); // Limit the level to a maximum of 100
      return `linear-gradient(to bottom, #f00 0%, #f00 ${level}%, #fff ${level}%, #fff 100%)`;
    };

    // Update background color of the entire screen when count changes
    document.body.style.background = calculateBackgroundColor();

    // Clean up function to reset background color when component unmounts
    return () => {
      document.body.style.background = ''; // Reset background color
    };
  }, [count]);

  // Function to handle incrementing the count
  const incrementCount = (): void => {
    setCount(count + 1);
  };

  // Function to handle decrementing the count
  const decrementCount = (): void => {
    setCount(count - 1);
  };

  // Function to handle resetting the count
  const resetCount = (): void => {
    setCount(0);
  };

  return (
    <div className="counter-container">
      <div className="count-display">{count}</div>
      <div className="button-container">
        <Button className="custom-button" variant="outlined" onClick={incrementCount}><AddIcon /></Button>
        <Button className="custom-button" variant="contained" onClick={resetCount}>Reset</Button>
        <Button className="custom-button" variant="outlined" onClick={decrementCount}><RemoveIcon/></Button>
      </div>
    </div>
  );
};

export default Counter;
