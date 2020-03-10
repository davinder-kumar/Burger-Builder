import React, { Component } from 'react'
import classes from './Modal.module.css'
import Backdrop from '../Backdrop/Backdrop'
import Aux from '../../../hoc/Auxiliry/Auxiliry'
const Modal =props=> {

    shouldComponentUpdate(nextProps){
        return (this.props.show !== nextProps.show || this.props.loading !== nextProps.loading)
    }

    render() {
        return (
            <Aux>
                <Backdrop show={this.props.show} clicked={this.props.modelClosed}></Backdrop>
                <div style={{
                    transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
                    opacity: this.props.show ? "1" : "0"
                }} className={classes.Modal}>
                    {this.props.children}
                </div>
            </Aux>
        );
    }


}

export default Modal