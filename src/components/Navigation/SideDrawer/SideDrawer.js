import React from 'react'
import Logo from '../../Logo/Logo'
import NavigationItems from '../Navigationitems/Navigationitems'
import classes from './SideDrawer.module.css'
import Backdrop from '../../UI/Backdrop/Backdrop'
import Aux from '../../../hoc/Auxiliry/Auxiliry'
const SideDrawer = (props) => {
    let attachedClasses = [classes.SideDrawer,classes.Close]
    if(props.show){
         attachedClasses = [classes.SideDrawer,classes.Open]
    }
    return (
        <Aux>
            <Backdrop show={props.show} clicked={props.click} />
            <div className={attachedClasses.join(" ")}>
                <div className={classes.Logo}>
                    <Logo />
                </div>
                <nav>
                    <NavigationItems />
                </nav>
            </div>
        </Aux>
    );
}
export default SideDrawer;