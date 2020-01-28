import React from 'react';
import Aux from '../../hoc/Auxilary'
import LayoutStyle from './Layout.module.css';
const layout = (props)=>(
    <Aux>
       <div  className={LayoutStyle.Content}> Toolbar, SideDrawer , Backdrop</div>
        <main>
            {props.children}
        </main>
    </Aux>
);
export default layout;