import logo from './logo.svg';
import './App.css';
import { useState } from "react";


function App() {

  //simple counter---------------------------------------------------------------------------------
  const [counter, setCounter] = useState(0);

  function incrementValue() {
    setCounter(counter + 1);
  }

  function decrementValue() {
    setCounter(counter - 1);
  }

  //Character counter - Twitter----------------------------------------------------------------------
  var permittedCharLimit=20;
  
  const[userInput,setUserInput]=useState("");  
  const[currentLength,setCurrentLength]=useState(0);
  const[charLeftLength,setCharLeftLength]=useState(permittedCharLimit);

  function inputChangeHandler(event){
    // console.log(event.target.value);
    
    setUserInput(event.target.value);
    calulateCharLimit(userInput);
  }

  function calulateCharLimit(updatedUserInput){
    setCurrentLength(updatedUserInput.length+1);
    // console.log(currentLength+"current length");
    var charLeftCount=(permittedCharLimit-(currentLength+1));
    // console.log(charLeftCount+"charleftcount");
    setCharLeftLength(charLeftCount);


  }


  return (
    <div className="App">
      <h3>A simple counter</h3>
      <p> <button onClick={incrementValue}>+</button>
        <span>    {counter}    </span>
        <button onClick={decrementValue}>-</button>
        </p>
       

        <h3>Character counter -Twitter</h3>
       <input type="text" id="input"
        onChange={inputChangeHandler}
       style={{
        border: "2px solid black"
        
       }}></input>
        <p>{userInput}</p>
        <p>{currentLength} is your current char count<br></br>Chars left: {charLeftLength}</p>


    </div>
  );
}

export default App;
