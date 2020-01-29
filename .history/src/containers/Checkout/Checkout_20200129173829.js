import React, { Component } from 'react'
import CheckoutSummary from '../../components/CheckoutSummary/CheckoutSummary'
import ContactForm from './ContactData/ContactData'
import { Route } from 'react-router-dom'
class Checkout extends Component {

    componentWillMount() {
        console.log(this.props)
        let query = new URLSearchParams(this.props.location.search)
        const FinalParam = {}
        for (let i of query) {
            FinalParam[i[0]] = parseInt(i[1])
        }
        this.setState({
            ingredients: FinalParam
        })

    }
    cancelHandler = () => {
        this.props.history.goBack()
    }
    successHandler = () =>{
        this.props.history.replace(this.props.match.path + "/contact-us")
    }
    render() {
        // console.log(this.state.ingredients)
        return (
            <div>
                <CheckoutSummary clickCancel={this.cancelHandler} clickSuccess={this.successHandler} ingredients={this.state.ingredients} />
                <Route path={ this.props.match.path + "/contact-us" } exact render=/>
            </div>
        )
    }
}

export default Checkout