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
        toggleSideDraw(!isSideDrawerVisible)
    }
        return (
            <Aux>
                <Toolbar isAuth={props.isAuth} clickMenu={this.drawToggleHandler} />
                <SideDrawer isAuth={props.isAuth} show={this.state.showSideDrawer} click={this.sideDrawerClosedHandler} />
                <main className={classes.Content}>
                    {this.props.children}
                </main>
            </Aux>
        );
    

}

const mapStateToProps = (state) =>{
    return {
        isAuth : state.auth.token !== null
    }
}


export default connect(mapStateToProps)(Layout)