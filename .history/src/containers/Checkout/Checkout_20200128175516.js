import React, { Component } from 'react'
import CheckoutSummary from '../../components/CheckoutSummary/CheckoutSummary'
class Checkout extends Component{

    componentWillMount(){
        let params = decodeURIComponent(this.props.location.search)

        params = Object.fromEntries(new URLSearchParams(params))
        const FinalParam = {}
        for(let i in params){
            if(params[i] > 0){
                FinalParam.i = 
            }
        }
        this.setState({
            ingredients : params
        })

    }
    render(){
        // console.log(this.state.ingredients)
        return (
            <div>
                <CheckoutSummary ingredients={this.state.ingredients} />
            </div>
        )
    }
}

export default Checkout