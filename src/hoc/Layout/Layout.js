import React, { Component } from 'react'
import Aux from '../Auxiliry/Auxiliry'
import classes from './Layout.module.css'
import Toolbar from '../../components/Navigation/Toolbar/Toolbar'
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer'
import { connect } from 'react-redux'
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