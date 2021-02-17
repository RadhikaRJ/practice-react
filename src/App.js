import logo from './logo.svg';
import './App.css';
import { useState } from "react";
import { compare } from 'semver';


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

  //password Match---------------------------------------------------------------------------------------------

 
  const [passwordOne, setPasswordOne] = useState("");
  const [passwordTwo, setPasswordTwo] = useState("");
  const [passwordMatchStatus,setPasswordMatchStatus] = useState("");
  
  
   function handleFirstPasswordInput(event){
     var updatedPasswordOne=event.target.value;
      setPasswordOne(currentPassword=>{
        const latestPasswordOneValue=updatedPasswordOne;
        return latestPasswordOneValue;
      });
      
   }

   
  //  console.log("password one is : " + passwordOne);
  //  console.log("password two is: " + passwordTwo);     
   
   function comparePasswords(event){
     
    var updatedPasswordTwo=event.target.value;
      setPasswordTwo(currentPassword=>{
        const latestPasswordTwoValue=updatedPasswordTwo;
        return latestPasswordTwoValue;
      });

      var latestPasswordValue=event.target.value;
      if(passwordOne!=latestPasswordValue){
        setPasswordMatchStatus(current=>"passwords are not matching");
       
      }
      else{
        setPasswordMatchStatus(current=>"passwords are matching");
      }

   }

  //Alphanumeric password---------------------------------------------------------------------------------------

   
  return (
    <div className="App">
      <h3>A simple counter</h3>
      <p> <button onClick={incrementValue}>+</button>
        <span>    {counter}    </span>
        <button onClick={decrementValue}>-</button>
        </p>
       

        <h3>Character counter -Twitter</h3>
       <input type="text" 
        onChange={inputChangeHandler}
       ></input>
        <p>{userInput}</p>
        <p>{currentLength} is your current char count<br></br>Chars left: {charLeftLength}</p>


       <h3>Password Match</h3>

       <label>Enter password: </label>
       <input type="password"
       onChange={handleFirstPasswordInput}></input>
       <br></br>
       <p>Password one is: {passwordOne}</p>

       <label>Confirm password: </label>
       <input type="password"
       onChange={comparePasswords}></input>
       <br></br>
       <p>Password two is: {passwordTwo}</p>
       
     
       <p>You password match result is: {passwordMatchStatus}</p>


    </div>
  );
}

export default App;
