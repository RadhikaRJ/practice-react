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

      
      if(passwordOne!=updatedPasswordTwo){
        setPasswordMatchStatus(current=>"passwords are not matching");
       
      }
      else{
        setPasswordMatchStatus(current=>"passwords are matching");
      }

   }

  //Alphanumeric password---------------------------------------------------------------------------------------
   const [alphanumericPaswdOne,setAlphanumericPswdOne] = useState("");
   const [alphanumericPaswdTwo,setAlphanumericPswdTwo] = useState("");
   const [alphanumericPasswordMatchStatus, setAlphanumericPasswordMatchStatus] = useState("");
   const [isAlphanumeric,setisAlphanumeric] = useState("");

   function handleAlphanumericPswdOne(event){
      var alpha_pswd_one=event.target.value;
      setAlphanumericPswdOne(currentPassword=>{
        const latestPswdOne=alpha_pswd_one;
        return latestPswdOne;
      });
      var hasNumFlag=0;
      for(var i=0;i<alpha_pswd_one.length;i++){
        var letter=alpha_pswd_one.charAt(i);
        if(!isNaN(letter)){
         hasNumFlag+=1;
        }
      }
      if(hasNumFlag==0){
        setisAlphanumeric(currentStatus=>{
          const status="Not Alphanumeric";
          return status;
        });
      }
      else{
        setisAlphanumeric(currentStatus=>{
          const status="Is Alphanumeric";
          return status;
        })
      }
   }


   function compareAlphanumericPasswords(event){
     var updatedAlphanumericPswdTwo=event.target.value;
     setAlphanumericPswdTwo(updatePswdTwo=>{
       const pswdtwo=updatedAlphanumericPswdTwo;
       return pswdtwo;
     });

     if(alphanumericPaswdOne!=updatedAlphanumericPswdTwo){
      setAlphanumericPasswordMatchStatus(status=>"Passwords are not Matching!");
     }
     else {
      setAlphanumericPasswordMatchStatus(status=>"Passwords are Matching!");
     }
   }









  return (
    <div className="App">


      <h3>A simple counter</h3>
      <p> <button onClick={incrementValue}>+</button>
        <span>    {counter}    </span>
        <button onClick={decrementValue}>-</button>
        </p>
       
    <hr></hr>


        <h3>Character counter -Twitter</h3>
       <input type="text" 
        onChange={inputChangeHandler}
       ></input>
        <p>{userInput}</p>
        <p>{currentLength} is your current char count<br></br>Chars left: {charLeftLength}</p>

<hr></hr>


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

      <hr></hr>


      <h3>Alphanumeric password</h3>
      <label>Enter Alphanumeric Password: </label>
      <input type="password"
      onChange={handleAlphanumericPswdOne}></input>
      <p>Password entered: {alphanumericPaswdOne}</p>
      <p>Alphanumeric check result: {isAlphanumeric}</p>

      <label>Confirm Password: </label>
      <input type="password" 
      onChange={compareAlphanumericPasswords}></input>
      <p>Password entered: {alphanumericPaswdTwo}</p>
      <p>Password Match result: {alphanumericPasswordMatchStatus} </p>

      <hr></hr>
    </div>
  );
}

export default App;
