

//password Match---------------------------------------------------------------------------------------------
import React, { useState } from 'react';
function SimplePasswordVerification(){

    const [passwordOne, setPasswordOne] = useState("");
    const [passwordTwo, setPasswordTwo] = useState("");
    
    var passwordMatchStatus="";
    
     function handleFirstPasswordInput(event){
       var updatedPasswordOne=event.target.value;
        setPasswordOne(currentPassword=>updatedPasswordOne);
        
     }
  
        
     function handleSecondPasswordInput(event){
       
      var updatedPasswordTwo=event.target.value;
        setPasswordTwo(currentPassword=>updatedPasswordTwo);
  
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
        value={passwordOne}
        onChange={handleFirstPasswordInput}></input>
        <br></br>
        <p>Password one is: {passwordOne}</p>
  
  
        <label>Confirm password: </label>
        <input type="password" value={passwordTwo}
        onChange={handleSecondPasswordInput}></input>
        <br></br>
        <p>Password two is: {passwordTwo}</p>     
        <p>You password match result is: {passwordMatchStatus}</p>
      </div>
    );
  }
  
  export default SimplePasswordVerification;