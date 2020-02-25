import React, { Component } from 'react'
import Order from '../../components/Order/Order'
import axios from '../../axios-orders'
import withErrors from '../../hoc/WithErrorHandler/WithErrorHandler'
import Spinner from '../../components/UI/Spinner/Spinner'
import * as actions from '../../redux-store/actions/index'
import { connect } from 'react-redux'
// import axios from '../../axios-orders'

class Orders extends Component {
    state = {
        loading: true,
        orders: [],
        price: null
    }
    deleteOrder = (orderId) =>{
        alert(orderId)
    }

    componentDidMount() {
        this.props.loadOrders();
    }
    render() {
        let orderss = this.props.orders.map(order => (
            <Order ingredients={order.ingredients} key={order.id} name={order.name} price={order.price} deleteOrder={this.deleteOrder} />
        ))
        if (this.props.loading) {
            orderss = <Spinner />
        }
        return (
            <>
                {orderss}
            </>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        orders: state.order.orders,
        loading: state.order.loading,
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        loadOrders: () => dispatch(actions.loadOrders()),

    }
}

export default connect(mapStateToProps,mapDispatchToProps)(withErrors(Orders, axios))