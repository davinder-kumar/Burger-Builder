import React, { Component } from 'react'
import CheckoutSummary from '../../components/CheckoutSummary/CheckoutSummary'
import ContactForm from ''
class Checkout extends Component {

    componentWillMount() {
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
        alert()
    }
    render() {
        // console.log(this.state.ingredients)
        return (
            <div>
                <CheckoutSummary clickCancel={this.cancelHandler} clickSuccess={this.successHandler} ingredients={this.state.ingredients} />
            </div>
        )
    }
}

export default Checkout