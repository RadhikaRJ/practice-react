import {useState} from "react";
import Toast from "./Toast";

function ToastDisplay(){
    const[showToast,setShowToast] =useState(false);

    return(
        <div>
            <Toast showToast={showToast} setShowToast={setShowToast}/>
            <button onClick={()=>{setShowToast(!showToast)}}>Show Toast</button>
        </div>
    )
}
export default ToastDisplay;