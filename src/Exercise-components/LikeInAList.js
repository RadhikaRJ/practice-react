
import LikeItem from "./LikeItem";

function LikeInAList(){
  const listofitems=['Team Iron Man','Team Captain America','Team Thor'];
  
    return(
        <div>
            <h3>Click on Like to support your favourite team!</h3>
            {
                listofitems.map((item,index)=>(
                    <div key={index}>
                        <LikeItem item={item} />
            </div>
                ))
            }
           
        </div>

    )
}

export default LikeInAList;