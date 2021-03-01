
import {useState} from "react";

function ButtonForDisplay(props){
    var [isDisplayed,setIsDisplayed]=useState(true);

    function setDivStyle(){
        if(isDisplayed){
            return({
                display:"none"
            })
        }
        else return({
            display:"inline"
        })
    }

    return(
        <div >
            <button onClick={()=>{
                       setIsDisplayed(!isDisplayed);
                      }}
                           >{props.i.item}</button>
                   <br></br>
                  <div style={setDivStyle()}>
                        <span>{props.i.description}</span>
                  </div>
                      <br></br>
        </div>
    )
}
export default ButtonForDisplay;
