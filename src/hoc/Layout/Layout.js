import React, { Component } from 'react'
import Aux from '../Auxiliry/Auxiliry'
import classes from './Layout.module.css'
import Toolbar from '../../components/Navigation/Toolbar/Toolbar'
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer'
class Layout extends Component {

    state = {
        showSideDrawer: false
    }

    sideDrawerClosedHandler = () => {
        this.setState({
            showSideDrawer: false
        })
    }

    drawToggleHandler = () => {
        this.setState((prevState, props) => {
            return {
                showSideDrawer: ! prevState.showSideDrawer
            }
        })
    }
    render() {
        return (
            <Aux>
                <Toolbar clickMenu={this.drawToggleHandler} />
                <SideDrawer show={this.state.showSideDrawer} click={this.sideDrawerClosedHandler} />
                <main className={classes.Content}>
                    {this.props.children}
                </main>
            </Aux>
        );
    }

}




export default Layout