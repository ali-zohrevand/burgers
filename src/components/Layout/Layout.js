import React from 'react';

import Aux from '../../hoc/Auxilary';
import classes from './Layout.module.css';
import Toolbar from "../UI/Toolbar/toolbar";
import Drawer from "../Navigation/SideDrawer/SideDrawer";
const layout = ( props ) => (
    <Aux>
        <Toolbar></Toolbar>
        <Drawer></Drawer>
        <main className={classes.Content}>
            {props.children}
        </main>
    </Aux>
);

export default layout;