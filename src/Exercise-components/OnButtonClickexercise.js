import {useState} from "react";
import ButtonForDisplay from "./ButtonForDisplay";
function OnButtonClickexercise(){

    const [someButtonValue,setSomeButtonValue]=useState("nothing");

    
    
    const itemList=[
        {
        item:"first element",
        description:"Jovial"
    },
    {
        item:"second element",
        description:"Funny"
    },
    {
        item:"third element",
        description:"Humorous"
    }
]
    return(
        <div>
            <button onClick={(ev)=>{setSomeButtonValue(ev.target.innerText)}}> PrintThisEvent</button>
            <p>{someButtonValue}</p>
            <br></br>
            <p>list of items:</p>
            {
               itemList.map((i)=>(
                   
                   <div>
                       <ButtonForDisplay i={i}/>
                       
                   </div>
               )) 
            }
            <br></br>
        </div>
    )
}
export default OnButtonClickexercise;