import React, { Component } from 'react'
import CheckoutSummary from '../../components/CheckoutSummary/CheckoutSummary'
class Checkout extends Component{
    
    componentWillMount(){
        let query = new URLSearchParams(this.props.location.search)
        for(let i in query.entries()){
            
        }
        // const FinalParam = {}
        // for(let i in params){
        //     if(params[i] > 0){
        //         FinalParam[i] = parseInt(params[i])
        //     }
        // }
        // this.setState({
        //     ingredients : FinalParam
        // })

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