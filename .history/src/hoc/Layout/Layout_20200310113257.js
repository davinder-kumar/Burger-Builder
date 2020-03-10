import React, { useState } from 'react'
import Aux from '../Auxiliry/Auxiliry'
import classes from './Layout.module.css'
import Toolbar from '../../components/Navigation/Toolbar/Toolbar'
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer'
import { connect } from 'react-redux'
const layout =(props) => {

    const [isSideDrawerVisible, toggleSideDraw] = useState(false)
    

    const sideDrawerClosedHandler = () => {
        toggleSideDraw(false)
    }

    const drawToggleHandler = () => {
        this.setState((prevState, props) => {
            return {
                showSideDrawer: !prevState.showSideDrawer
            }
        })
    }
    render() {
        return (
            <Aux>
                <Toolbar isAuth={this.props.isAuth} clickMenu={this.drawToggleHandler} />
                <SideDrawer isAuth={this.props.isAuth} show={this.state.showSideDrawer} click={this.sideDrawerClosedHandler} />
                <main className={classes.Content}>
                    {this.props.children}
                </main>
            </Aux>
        );
    }

}

const mapStateToProps = (state) =>{
    return {
        isAuth : state.auth.token !== null
    }
}


export default connect(mapStateToProps)(Layout)