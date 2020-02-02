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
        axios.get("orders.json")
            .then((res) => {
                const orders = []
                for (let i in res.data) {
                     console.log(res.data[i])
                    orders.push({
                        ingredients: res.data[i].ingredients,
                        id: i,
                        price: res.data[i].price,
                        name : res.data[i].orderData.name
                    })
                }

                this.setState({
                    loading: false,
                    orders: orders
                })
            })
            .catch(() => {
                this.setState({
                    loading: false
                })
            })
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
export default withErrors(Orders, axios)