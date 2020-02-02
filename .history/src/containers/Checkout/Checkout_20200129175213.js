import React, { Component } from 'react'
import CheckoutSummary from '../../components/CheckoutSummary/CheckoutSummary'
import ContactForm from './ContactData/ContactData'
import { Route } from 'react-router-dom'
class Checkout extends Component {

    componentWillMount() {
        let query = new URLSearchParams(this.props.location.search)
        const FinalParam = {}
        let price =null
        for (let i of query) {
            if(i[0] === 'price'){
                price = i[1]
            }else{
                FinalParam[i[0]] = parseInt(i[1])
            }
            
        }
        this.setState({
            ingredients: FinalParam,
            price : price
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
                <Route path={ this.props.match.path + "/contact-us" } exact render={() => (
                    <ContactForm  ingredients={this.state.ingredients} />
                )}/>
            </div>
        )
    }
}

export default Checkout