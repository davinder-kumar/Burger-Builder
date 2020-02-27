import React from 'react'
import classes from './Toolbar.module.css'
import BurgerLogo from '../../Logo/Logo'
import NavigationItems from '../Navigationitems/Navigationitems'
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle'

const toolbar = (props) => {
    return (
        <header className={classes.Toolbar}>
            <DrawerToggle clicked={props.clickMenu} />
            <div className={classes.Logo}>
                <BurgerLogo />
            </div>
            <nav>
                <NavigationItems isAuth={props.isAuth} />
            </nav>
        </header>
    );
}

export default toolbar