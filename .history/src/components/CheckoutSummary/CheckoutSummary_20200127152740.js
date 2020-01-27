import React,{ Component } from 'react'
import Burger from '../Burger/Burger'
const checkoutSummary = (props) => {
    return (
        <h3>Hope we taste well</h3>
        <div style={{width : '100px' , margin : 'auto'}}>
            <Burger in/>
        </div>
    );
}

export default checkoutSummary