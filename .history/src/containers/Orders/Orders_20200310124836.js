import React, { Component, useState, useEffect } from 'react'
import Order from '../../components/Order/Order'
import axios from '../../axios-orders'
import withErrors from '../../hoc/WithErrorHandler/WithErrorHandler'
import Spinner from '../../components/UI/Spinner/Spinner'
import * as actions from '../../redux-store/actions/index'
import { connect } from 'react-redux'
// import { func } from 'prop-types'
// import axios from '../../axios-orders'

const Orders = (props) => {
 
    
    const deleteOrder = (orderId) => {
        props.deleteOrder(orderId, props.token, props.userId);
    }

    useEffect(() =>{
        props.loadOrders(props.token, props.userId);
    },[])
        let orderss = props.orders.map(order => (
            <Order
                ingredients={order.ingredients}
                key={order.id}
                id={order.id}
                name={order.name}
                price={order.price}
                deleteOrder={deleteOrder} />
        ))
        if (props.loading) {
            orderss = <Spinner />
        }
        return (
            <>
                {orderss}
            </>
        );
}

const mapStateToProps = (state) => {
    return {
        orders: state.order.orders,
        loading: state.order.loading,
        token: state.auth.token,
        userId: state.auth.userId
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        loadOrders: (token, userId) => dispatch(actions.loadOrders(token, userId)),
        deleteOrder: (orderID, token, userId) => dispatch(actions.deleteOrder(orderID, token, userId))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withErrors(Orders, axios))