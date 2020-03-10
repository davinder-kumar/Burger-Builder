import React, { Component } from 'react'
import classes from './Modal.module.css'
import Backdrop from '../Backdrop/Backdrop'
import Aux from '../../../hoc/Auxiliry/Auxiliry'
const Modal = props => {

    shouldComponentUpdate(nextProps){
        return (props.show !== nextProps.show || props.loading !== nextProps.loading)
    }

        return (
            <Aux>
                <Backdrop show={props.show} clicked={props.modelClosed}></Backdrop>
                <div style={{
                    transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
                    opacity: props.show ? "1" : "0"
                }} className={classes.Modal}>
                    {props.children}
                </div>
            </Aux>
        );


}

export default Modal