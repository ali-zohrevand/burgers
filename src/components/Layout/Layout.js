import React from 'react';

import Aux from '../../hoc/Auxilary';
import classes from './Layout.module.css';
import Toolbar from "../UI/Toolbar/toolbar";
const layout = ( props ) => (
    <Aux>
        <Toolbar></Toolbar>

        <main className={classes.Content}>
            {props.children}
        </main>
    </Aux>
);

export default layout;