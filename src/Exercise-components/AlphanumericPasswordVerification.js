import React, { useState } from 'react';
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
    
    
     if(alphanumericPaswdOne!=alphanumericPaswdTwo || alphanumericPaswdOne==""||alphanumericPaswdTwo==""){
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
        onChange={handleAlphanumericPswdOne} ></input><br></br>
        <label>Confirm Password: </label>
        <input type={inputType} 
        onChange={handleAlphanumericPswdTwo}></input>
        <br></br>
        <button onClick={displayPassword}>{buttonText}</button>
  
        {/* <p>Password entered: {alphanumericPaswdOne}</p>
        <p>Alphanumeric Password 1: {pswdOneAlphanumericStatus}</p>
  
        
        <p>Password entered: {alphanumericPaswdTwo}</p>
        <p>Alphanumeric Password 2: {pswdTwoAlphanumericStatus}</p> */}
        <p>Password Match result: {alphanumericPasswordMatchStatus} </p>
  
        <h3>Disable Submit Button</h3>
        <button disabled={buttonStatus}>Submit Alphanumeric Password</button>
      </div>
    );
  }

  export default AlphanumericPasswordVerification;