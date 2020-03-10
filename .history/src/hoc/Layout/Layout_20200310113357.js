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
                <Toolbar isAuth={props.isAuth} clickMenu={drawToggleHandler} />
                <SideDrawer isAuth={props.isAuth} show={isSideDrawerVisible} click={sideDrawerClosedHandler} />
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


export default connect(mapStateToProps)(ayout)