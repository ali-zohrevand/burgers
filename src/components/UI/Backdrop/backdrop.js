import React from "react";
import Aux from "../../../hoc/Auxilary"
import Class from "../Backdrop/backdrop.module.css"
const Backdrop= (props)=>{
    return(
        props.show?<div className={Class.Backdrop} onClick={props.clicked}></div>:null
    );
}
export default Backdrop;