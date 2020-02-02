import React, { Component } from 'react'
import Aux from '../../hoc/Auxiliry/Auxiliry'
import Burger from '../../components/Burger/Burger'
import BuilderControls from '../../components/Burger/BuildControls/BuildControls'
import Modal from '../../components/UI/Modal/Modal'
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary'
import axois from '../../axios-orders'
import Spinner from '../../components/UI/Spinner/Spinner'
import WithErrorHandler from '../../hoc/WithErrorHandler/WithErrorHandler'
import { connect } from 'react-redux'
import * as actionsList from '../../redux-store/actions'
class BurgerBuilder extends Component {
    state = {
        isPurchasable: false,
        purchasing: false,
        loading: false,
        isError: false
    }

    componentDidMount() {
        // axois.get("/ingrediants.json")
        //     .then(response => {
        //         this.setState({
        //             ingredients: response.data
        //         })
        //     }).catch(error => {
        //         this.setState({
        //             isError: true
        //         })
        //     })
    }

    purchaseHandler = () => {
        this.setState({ purchasing: true })
    }
 
    updatePurchaseState = () => {
        const Ingredients = {
            ...this.props.ingredients
        }

        const IngCount = Object.keys(Ingredients).map(Ing => {
            return Ingredients[Ing]
        }).reduce((prevVal, newVal) => {
            return prevVal + newVal
        }, 0)
        return IngCount > 0
    }
    purchaseCancelHandler = () => {
        this.setState({
            loading: false, purchasing: false
        })
    }
    purchaseContinueHandler = () => {
        const ingrediants = this.props.ingredients
        const params = []
        for (var key in ingrediants) {

            params.push(encodeURIComponent(key) + "=" + encodeURIComponent(ingrediants[key]))
        }
        params.push("price=" + this.state.price)
        const urlParams = params.join("&");

        this.props.history.push({
            pathname: "/checkout",
            search: urlParams
        });
    }

    render() {
        const disabledInfo = { ...this.props.ingredients }
        for (const key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <= 0
        }

        let burger = this.state.isError ? "Aplication is broken somehow! " : <Spinner />
        let orderSummry = <Spinner />
        if (this.props.ingredients) {
            burger = (
                <Aux>
                    <Burger ingredients={this.props.ingredients} />
                    <BuilderControls
                        IngredientAdd={this.props.addIngrediant}
                        removeIng={this.props.removeIngrediant}
                        disabledInfo={disabledInfo}
                        price={this.props.price}
                        isPurchasable={this.updatePurchaseState()}
                        purchasing={this.purchaseHandler}
                    />
                </Aux>
            );
            orderSummry = (
                <OrderSummary
                    purchaseCancelled={this.purchaseCancelHandler}
                    purchaseContinued={this.purchaseContinueHandler}
                    ingredients={this.props.ingredients}
                    price={this.props.price}
                />
            )
        }

        if (this.state.loading) {
            orderSummry = <Spinner />
        }

        return (
            <Aux>
                <Modal loading={this.state.loading} show={this.state.purchasing} modelClosed={this.purchaseCancelHandler}>
                    {orderSummry}
                </Modal>
                {burger}
            </Aux>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        ingredients: state.ingredients,
        price: state.price,
    }
}
const mapDispatchToProps = (dispatch) => ({
    addIngrediant: (ingType) => dispatch({ type: actionsList.ADD_INGREDIANT, ingType: ingType }),
    removeIngrediant: (ingType) => dispatch({ type: actionsList.REMOVE_INGREDIANT, ingType: ingType })
})

export default connect(mapStateToProps, mapDispatchToProps)(WithErrorHandler(BurgerBuilder, axois)) 