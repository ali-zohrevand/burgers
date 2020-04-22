import React from "react";
import Class from '../Toolbar/toolbar.module.css'
import Logo from "../../Logo/logo";
import Navigation from '../../Navigation/NavigationItems/navigationItems';
import DrawerToggle from "../../Navigation/SideDrawer/DrawerToggle/DrawerToggle";
const toolbar = (props)=>{
    return(
        <header className={Class.Toolbar}>
            <DrawerToggle  clicked={props.menuCliked} ></DrawerToggle>
            <Logo  height={"80%"}></Logo>
            <div className={Class.DesktopOnly}>
                <Navigation></Navigation>
            </div>
        </header>
    );
};
export default toolbar;