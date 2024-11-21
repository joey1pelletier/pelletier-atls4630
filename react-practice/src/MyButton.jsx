import { useState } from 'react';

export default function MyButton() {

    // count is your variable that's already at useState(0) i.e. current state, and setCount is the function that manipulates it
    const [ count, setCount ] = useState(0);
  
    function handleClick() {
      setCount(count + 1);
    }
  
    return (
      <button onClick={handleClick}>
        I'm a button with count: {count} 
      </button>
    );  
  }