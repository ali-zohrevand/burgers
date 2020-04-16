import React from "react";
import Class from '../Modal/modal.module.css'
import Aux from '../../../hoc/Auxilary'
import Backdrop from "../Backdrop/backdrop";
const Modal =(props)=>(
    <Aux>
        <Backdrop show={props.show} clicked={props.modalClosed}></Backdrop>
        <div className={Class.Modal}
             style={{transform:props.show?'translateY(0)':'translateY(-100vh)'
                 , opacity:props.show ? '1':'0'}}
        >
            {props.children}
        </div>
    </Aux>

)
export default Modal;