import React, { Component, useState, useEffect } from 'react'
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
import routes from '../../routes'
export const BurgerBuilder = props => {
    
    const [isPurchasable,setIsPurchasable] = useState(false)
    const [purchasing, setPurchasing] = useState(false)
    const [loading,setLoading] = useState(false)
    
    useEffect(()=>{
        props.initIngredients();
    },[]) 

    const purchaseHandler = () => {
        if (props.isAuth) {
            setPurchasing(true)
        } else {
            props.setAutuPathUrl(routes.checkout)
            props.history.push(routes.auth)
        }
    }
    const updatePurchaseState = () => {
        const Ingredients = {
            ...props.ingredients
        }
        const IngCount = Object.keys(Ingredients).map(Ing => {
            return Ingredients[Ing]
        }).reduce((prevVal, newVal) => {
            return prevVal + newVal
        }, 0)
        return IngCount > 0
    }
    const purchaseCancelHandler = () => {
        setLoading(false)
        setPurchasing(false)
    }
    purchaseContinueHandler = () => {
        this.props.purchaseInit();
        this.props.history.push(routes.checkout);
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
                        isAuth={this.props.isAuth}
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
    return {
        ingredients: state.burgerBuilder.ingredients,
        price: state.burgerBuilder.price,
        error: state.burgerBuilder.isError,
        isAuth: state.auth.token !== null,
        AuthRedirectPath: state.auth.AuthRedirectPath
    }
}
const mapDispatchToProps = (dispatch) => ({
    addIngrediant: (ingType) => dispatch(actionsList.addIngrediant(ingType)),
    removeIngrediant: (ingType) => dispatch(actionsList.removeIngredient(ingType)),
    initIngredients: () => dispatch(actionsList.initIngredients()),
    purchaseInit: () => dispatch(actionsList.purchaseInit()),
    setAutuPathUrl: (path) => dispatch(actionsList.setAuthRedirectPath(path))
})

export default connect(mapStateToProps, mapDispatchToProps)(WithErrorHandler(BurgerBuilder, axois)) 