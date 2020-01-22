import React from 'react'
import classes from './Toolbar.module.css'
import BurgerLogo from '../../Logo/Logo'
import NavigationItems from '../Navigationitems/Navigationitems'
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle'

const toolbar = (props) => {
    return (
        <header className={classes.Toolbar}>
            <Menu clicked={props.clickMenu} />
            <div className={classes.Logo}>
                <BurgerLogo />
            </div>
            <nav>
                <NavigationItems />
            </nav>
        </header>
    );
}

export default toolbar