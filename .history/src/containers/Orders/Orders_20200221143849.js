import React, { Component } from 'react'
import Order from '../../components/Order/Order'
import axios from '../../axios-orders'
import withErrors from '../../hoc/WithErrorHandler/WithErrorHandler'
import Spinner from '../../components/UI/Spinner/Spinner'

class Orders extends Component {
    state = {
        loading: true,
        orders: [],
        price: null
    }
    componentDidMount() {
        
    }
    render() {
        let orderss = this.state.orders.map(order => (
            <Order ingredients={order.ingredients} key={order.id} name={order.name} price={order.price} />
        ))
        if (this.state.loading) {
            orderss = <Spinner />
        }
        return (
            <>
                {orderss}
            </>
        );
    }
}

const mapStateToProps = (state) =>{
    return {
        orders : state.order.orders,
        loading : state.order.loading,
    }
}
const mapDispatchToProps = (state) =>{
    return {
        loadOrders : state.order.orders,
        loading : state.order.loading,
    }
}

export default withErrors(Orders, axios)