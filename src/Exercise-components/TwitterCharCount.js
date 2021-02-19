
import React, { useState } from 'react';
//Character counter - Twitter----------------------------------------------------------------------

function TwitterCharCount(){
    var permittedCharLimit=20;
    var charLeftCount=20;
    var charCurrentCount=0;
    const[userInput,setUserInput]=useState("");  
   
  
    function inputChangeHandler(event){
      
      const currentInput=event.target.value;
      setUserInput(currentVal=>currentInput);
     
      
  
    }
    charCurrentCount=userInput.length;
    charLeftCount=permittedCharLimit-charCurrentCount;
  
  
     
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
  
  export default TwitterCharCount;