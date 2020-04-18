import React from "react";
import Class from '../Toolbar/toolbar.module.css'
import Logo from "../../Logo/logo";
const toolbar = (props)=>{
    return(
        <header className={Class.Toolbar}>
            <div>Menu</div>
            <Logo></Logo>
            <nav>
                ...
            </nav>
        </header>
    );
};
export default toolbar;