import React, { Component } from 'react'
import Aux from '../../hoc/Auxiliry'
import classes from './Layout.module.css'
import Toolbar from '../../components/Navigation/Toolbar/Toolbar'
import SideDrawer from '../Navigation/SideDrawer/SideDrawer'
class Layout extends Component {

    state={
        showSideDrawer :false
    }

    sideDrawerClosedHandler = () => {

    }
    render() {
        return (
            <Aux>
                <Toolbar />
                <SideDrawer />
                <main className={classes.Content}>
                    {this.props.children}
                </main>
            </Aux>
        );
    }

}




export default Layout