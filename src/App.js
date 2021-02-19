
import './App.css';
import { useState } from "react";

import ButtonCounter from './Exercise-components/ButtonCounter';


 //Character counter - Twitter----------------------------------------------------------------------

function TwitterCharCount(){
  var permittedCharLimit=20;
  var charLeftCount=20;
  var charCurrentCount=0;
  const[userInput,setUserInput]=useState("");  
  // const[currentLength,setCurrentLength]=useState(0);
  // const[charLeftLength,setCharLeftLength]=useState(permittedCharLimit);

  function inputChangeHandler(event){
    
    const currentInput=event.target.value;
    setUserInput(currentVal=>currentInput);
    // calulateCharLimit(currentInput);
    

  }
  charCurrentCount=userInput.length;
  charLeftCount=permittedCharLimit-charCurrentCount;


  // function calulateCharLimit(updatedUserInput){
  //   setCurrentLength(updatedUserInput.length+1);
  //   const lengthOfInput=updatedUserInput.length;
  //   setCurrentLength(currentInputLength=>{
  //     var inputLength=lengthOfInput;
  //     return inputLength;
  //   });
  //   var charLeftCount=(permittedCharLimit-lengthOfInput);
  //    setCharLeftLength(updatedLength=>charLeftCount);


  // }

  return(
    <div>
      <h3>Character counter -Twitter</h3>
       <input type="text" 
        onChange={inputChangeHandler}
       ></input>
        <p>{userInput}</p>
        <p>{charCurrentCount} is your current char count<br></br>Chars left: {charLeftCount}</p>
    </div>
  );
}


//password Match---------------------------------------------------------------------------------------------
function SimplePasswordVerification(){

  const [passwordOne, setPasswordOne] = useState("");
  const [passwordTwo, setPasswordTwo] = useState("");
  // const [passwordMatchStatus,setPasswordMatchStatus] = useState("");
  var passwordMatchStatus="";
  
   function handleFirstPasswordInput(event){
     var updatedPasswordOne=event.target.value;
      setPasswordOne(currentPassword=>updatedPasswordOne);
      
   }

   
  //  console.log("password one is : " + passwordOne);
  //  console.log("password two is: " + passwordTwo);     
   
   function handleSecondPasswordInput(event){
     
    var updatedPasswordTwo=event.target.value;
      setPasswordTwo(currentPassword=>updatedPasswordTwo);

      
      // if(passwordOne!=updatedPasswordTwo){
      //   setPasswordMatchStatus(current=>"passwords are not matching");
       // }
      // else{
      //   setPasswordMatchStatus(current=>"passwords are matching");
      // }

   }

   if(passwordOne!=passwordTwo){
     passwordMatchStatus="Passwords dont match";
   }
   else passwordMatchStatus="Passwords are a match";

  return(
    <div>
      <h3>Password Match</h3>

      <label>Enter password: </label>
      <input type="password"
      onChange={handleFirstPasswordInput}></input>
      <br></br>
      <p>Password one is: {passwordOne}</p>


      <label>Confirm password: </label>
      <input type="password"
      onChange={handleSecondPasswordInput}></input>
      <br></br>
      <p>Password two is: {passwordTwo}</p>     
      <p>You password match result is: {passwordMatchStatus}</p>
    </div>
  );
}



//Alphanumeric password---------------------------------------------------------------------------------------

function AlphanumericPasswordVerification(){
  const [alphanumericPaswdOne,setAlphanumericPswdOne] = useState("");
  const [alphanumericPaswdTwo,setAlphanumericPswdTwo] = useState("");
  var alphanumericPasswordMatchStatus="";
  var pswdOneAlphanumericStatus="";
  var pswdTwoAlphanumericStatus="";
  var buttonStatus=true;
  const [passwordDisplay,setPasswordDisplay] = useState(false);
  
  var buttonText="Show Password"
  var inputType="password";

   function handleAlphanumericPswdOne(event){
     setAlphanumericPswdOne(pswd=>event.target.value);
   }

   function handleAlphanumericPswdTwo(event){
    setAlphanumericPswdTwo(pswd=>event.target.value);
   }

   function verifyIsAlphanumeric(pswd){
    var flag=0;
     for(var i=0;i<pswd.length;i++){       
      var letter=pswd.charAt(i);
           if(!isNaN(letter)){
             flag++;
            }
     }
     if(flag==0){
       return false;
     }else return true;
   }
  
  
   if(alphanumericPaswdOne!=alphanumericPaswdTwo){
    alphanumericPasswordMatchStatus="passwords don't match";
    buttonStatus=true;
   }
   else {
     alphanumericPasswordMatchStatus="passwords match";
     buttonStatus=false;
   }

 
   if(verifyIsAlphanumeric(alphanumericPaswdOne)){
    pswdOneAlphanumericStatus="is Alphanumeric"
   }
   else pswdOneAlphanumericStatus="is not alphanumeric";

   if(verifyIsAlphanumeric(alphanumericPaswdTwo)){
    pswdTwoAlphanumericStatus="is Alphanumeric"
   }
   else pswdTwoAlphanumericStatus="is not alphanumeric";

   function displayPswd(){
     alert(alphanumericPaswdOne+" is the password");
   }

   
   function displayPassword(){
    setPasswordDisplay(state=>!state);
    }

    if(passwordDisplay){
      inputType="text";
      buttonText="Hide Password";
    }else{
      inputType="password";
      buttonText="Show Password";
    }

  return(
    <div>
      <h3>Alphanumeric password</h3>
      <label>Enter Alphanumeric Password: </label>
      
      {/* Show Password exercise  */}
      <input type={inputType}
      onChange={handleAlphanumericPswdOne} ></input>
      <button onClick={displayPassword}>{buttonText}</button>

      <p>Password entered: {alphanumericPaswdOne}</p>
      <p>Alphanumeric Password 1: {pswdOneAlphanumericStatus}</p>

      <label>Confirm Password: </label>
      <input type="password" 
      onChange={handleAlphanumericPswdTwo}></input>
      <p>Password entered: {alphanumericPaswdTwo}</p>
      <p>Alphanumeric Password 2: {pswdTwoAlphanumericStatus}</p>
      <p>Password Match result: {alphanumericPasswordMatchStatus} </p>

      <h3>Disable Submit Button</h3>
      <button disabled={buttonStatus}>Submit Alphanumeric Password</button>
    </div>
  );
}


function App() {

  return (
    <div className="App">
      <ButtonCounter/>
      <hr></hr>
      <TwitterCharCount/>
      <hr></hr>
      <SimplePasswordVerification/>
      <hr></hr>
      <AlphanumericPasswordVerification/>
      <hr></hr>
      
    </div>
  );
}

export default App;
