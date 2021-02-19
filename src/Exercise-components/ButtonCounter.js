//simple counter---------------------------------------------------------------------------------
import React, { useState } from 'react';

function ButtonCounter(){
    const [counter, setCounter] = useState(0);
  
  function incrementValue() {
    setCounter(counter + 1);
  }
  
  function decrementValue() {
    setCounter(counter - 1);
  }
  
    return(
      <div>
      <h3>A simple counter</h3>
      <p> <button onClick={incrementValue}>+</button>
        <span>    {counter}    </span>
        <button onClick={decrementValue}>-</button>
        </p>
        </div>
    );
  }
  
  export default ButtonCounter;