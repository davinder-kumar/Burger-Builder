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
import * as actionsList from '../../redux-store/actions/index'
import { addIngrediant, removeIngredient, initIngredients } from '../../redux-store/actions/index'
class BurgerBuilder extends Component {
    state = {
        isPurchasable: false,
        purchasing: false,
        loading: false,
        
    }

    componentDidMount() {
        this.props.initIngredients();
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
        this.props.history.push("/checkout");
    }

    render() {
        const disabledInfo = { ...this.props.ingredients }
        for (const key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <= 0
        }

        let burger = this.props.error ? "Ingredients can't loaded right now. Please try again." : <Spinner />
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
                <Modal loading={this.state.loading}
                    show={this.state.purchasing}
                    modelClosed={this.purchaseCancelHandler}>
                    {orderSummry}
                </Modal>
                {burger}
            </Aux>
        );
    }
}

const mapStateToProps = (state) => {
    console.log(state,"")
    return {
        ingredients: state.burger.ingredients,
        price: state.burger.price,
        error : state.burger.isError
    }
}
const mapDispatchToProps = (dispatch) => ({
    addIngrediant: (ingType) => dispatch(actionsList.addIngrediant(ingType)),
    removeIngrediant: (ingType) => dispatch(actionsList.removeIngredient(ingType)),
    initIngredients: () => dispatch(actionsList.initIngredients())
})

export default connect(mapStateToProps, mapDispatchToProps)(WithErrorHandler(BurgerBuilder, axois)) 