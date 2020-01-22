import React, { Component } from 'react'
import Aux from '../../hoc/Auxiliry'
import classes from './Layout.module.css'
import Toolbar from '../../components/Navigation/Toolbar/Toolbar'
import SideDrawer from '../Navigation/SideDrawer/SideDrawer'
class Layout extends Component {

    state = {
        showSideDrawer: false
    }

    sideDrawerClosedHandler = () => {
        this.setState({
            showSideDrawer: false
        })
    }

    menuClickHandler = () => {
        this.setState((prevState, props) => {
            console.log(prevState,props)
            return {
                showSideDrawer: ! prevState.
            }
        })
    }
    render() {
        return (
            <Aux>
                <Toolbar clickMenu={this.menuClickHandler} />
                <SideDrawer show={this.state.showSideDrawer} click={this.sideDrawerClosedHandler} />
                <main className={classes.Content}>
                    {this.props.children}
                </main>
            </Aux>
        );
    }

}




export default Layout