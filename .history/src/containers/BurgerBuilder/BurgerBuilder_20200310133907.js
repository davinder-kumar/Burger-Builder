import React, {  useState, useEffect } from 'react'
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
    const purchaseContinueHandler = () => {
        props.purchaseInit();
        props.history.push(routes.checkout);
    }
        const disabledInfo = { ...props.ingredients }
        for (const key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <= 0
        }

        let burger = props.error ? "Ingredients can't loaded right now. Please try again." : <Spinner />
        let orderSummry = <Spinner />
        if (props.ingredients) {
            burger = (
                <Aux>
                    <Burger ingredients={props.ingredients} />
                    <BuilderControls
                        IngredientAdd={props.addIngrediant}
                        removeIng={props.removeIngrediant}
                        disabledInfo={disabledInfo}
                        price={props.price}
                        isPurchasable={updatePurchaseState()}
                        purchasing={purchaseHandler}
                        isAuth={props.isAuth}
                    />
                </Aux>
            );
            orderSummry = (
                <OrderSummary
                    purchaseCancelled={purchaseCancelHandler}
                    purchaseContinued={purchaseContinueHandler}
                    ingredients={props.ingredients}
                    price={props.price}
                />
            )
        }

        if (loading) {
            orderSummry = <Spinner />
        }

        return (
            <Aux>
                <Modal loading={loading}
                    show={purchasing}
                    modelClosed={purchaseCancelHandler}>
                    {orderSummry}
                </Modal>
                {burger}
            </Aux>
        );
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