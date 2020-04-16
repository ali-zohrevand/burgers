import React from "react";
import Class from '../Button/button.module.css'
const Button=(props)=>(
    <button className={[Class.Button,Class[props.classType]].join(' ')}
            onClick={props.clicked}>{props.children}</button>
);
export default Button;