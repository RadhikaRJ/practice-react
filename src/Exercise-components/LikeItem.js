import {useState} from "react";
function LikeItem(props){
    const [numberofLikes,setNumberOfLikes]=useState(0);

    return(
        <div>

        <p>{props.item} <button onClick={()=>{setNumberOfLikes(numberofLikes+1)}} style={{background:"transparent", border:"none", fontSize:"1rem", outline:"none"}}>👍 Likes: {numberofLikes} </button></p>
        </div>
    )
}
export default LikeItem;