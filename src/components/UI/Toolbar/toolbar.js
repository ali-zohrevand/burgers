import React from "react";
import Class from '../Toolbar/toolbar.module.css'
import Logo from "../../Logo/logo";
import Navigation from '../../Navigation/NavigationItems/navigationItems';
const toolbar = (props)=>{
    return(
        <header className={Class.Toolbar}>
            <div>Menu</div>
            <Logo></Logo>
            <Navigation></Navigation>
        </header>
    );
};
export default toolbar;