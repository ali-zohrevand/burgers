import React from 'react';

import Logo from '../../Logo/logo';
import NavigationItems from '../NavigationItems/navigationItems';
import classes from '../SideDrawer/SideDrawer.module.css';
import Backdrop from '../../UI/Backdrop/backdrop';
import Aux from '../../../hoc/Auxilary';

const sideDrawer = ( props ) => {

    return (
   <Aux>
       <div className={classes.SideDrawer}>
           <div className={classes.Logo}>
               <Logo></Logo>
           </div>
           <nav>
               <NavigationItems></NavigationItems>
           </nav>
       </div>
   </Aux>
    );
};

export default sideDrawer;