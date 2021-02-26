function Toast(props){
    if(props.showToast){

        return(
            <div>
                <p>“If you focus on what you left behind, then how can you see what lies ahead?”--Chef Gusteau, "Ratatouille" <button onClick={()=>{props.setShowToast(!props.showToast)}}>Hide</button></p>
            <br></br>
            </div>
        )
    }

    return(
        <div>
           
           
        </div>
    )
}
export default Toast;