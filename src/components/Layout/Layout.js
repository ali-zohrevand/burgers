import React, {Component} from 'react';

import Aux from '../../hoc/Auxilary';
import classes from './Layout.module.css';
import Toolbar from "../UI/Toolbar/toolbar";
import SiteDrawer from "../Navigation/SideDrawer/SideDrawer";
class Layout extends Component{
    state={
        showDrawer: true,
    }
    siteDrawerClosedHandler=()=>{
        this.setState({
            showDrawer:false,
        });
    }
    menuClickHandler=()=>{
 /*      const currentStatus = this.state.showDrawer;
       this.setState({
           showDrawer:!currentStatus,
       });*/
       this.setState((prevState)=>{
           return{ showDrawer:!prevState.showDrawer}
       });
    }
    render() {
        return (
            <Aux>
                <Toolbar menuCliked={this.menuClickHandler}></Toolbar>
                <SiteDrawer open={this.state.showDrawer} closed={this.siteDrawerClosedHandler}></SiteDrawer>
                <main className={classes.Content}>
                    {this.props.children}
                </main>
            </Aux>
        );
    }
}

export default Layout;