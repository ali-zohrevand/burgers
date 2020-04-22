import React from "react";
import Class from "../SideDrawer/SideDrawer.module.css";
import Logo from "../../Logo/logo";
import Navigation from '../../Navigation/NavigationItems/navigationItems';
import Aux from '../../../hoc/Auxilary';
import Backdrop from "../../UI/Backdrop/backdrop";
const SiteDrawer = (props)=>{
    let attachedClasses = [Class.SideDrawer, Class.Close];
    if (props.open){
        attachedClasses = [Class.SideDrawer, Class.Open];
    }
    return(

        <Aux>
            <Backdrop show={props.open} clicked={props.closed}></Backdrop>
            <div className={attachedClasses.join(" ")}>
                <div className={Class.Logo}>
                    <Logo/>
                </div>
                <nav>
                    <Navigation></Navigation>
                </nav>
            </div>
        </Aux>
    );
}
export default SiteDrawer;
