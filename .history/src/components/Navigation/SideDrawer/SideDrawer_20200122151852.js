import React from 'react'
import Logo from '../../Logo/Logo'
import NavigationItems from '../Navigationitems/Navigationitems'
import classes from './SideDrawer.module.css'
import Backdrop from '../../UI/Backdrop/Backdrop'
const SideDrawer = () => {
    return (
        <Backdrop />
        <div className={classes.SideDrawer}>
            <div className={classes.Logo}>
                <Logo />
            </div>
            <nav>
                <NavigationItems />
            </nav>
        </div>
    );
}
export default SideDrawer;