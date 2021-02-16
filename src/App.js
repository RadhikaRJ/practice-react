import logo from './logo.svg';
import './App.css';
import { useState } from "react";


function App() {

  const [counter, setCounter] = useState(0);

  function incrementValue() {
    setCounter(counter + 1);
  }

  function decrementValue() {
    setCounter(counter - 1);
  }
  return (
    <div className="App">
      <h3>Button click exercise</h3>
      <p> <button onClick={incrementValue}>+</button>
        <span>    {counter}    </span>
        <button onClick={decrementValue}>-</button>
        </p>
       

        <h3>Twitter Character counter exercise</h3>
        
    </div>
  );
}

export default App;
