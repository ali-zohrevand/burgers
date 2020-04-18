import React from "react";
import logo from '../../assets/images/burger-logo.png'
import Class from '../Logo/logo.module.css'
const Logo =(props)=>{
    return(
        <div className={Class.Logo}>
            <img src={logo} alt="Logo"/>
        </div>
    );
}
export default Logo;