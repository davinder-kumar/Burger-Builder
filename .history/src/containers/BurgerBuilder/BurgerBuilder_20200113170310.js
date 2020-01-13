import React, { Component } from 'react'
import Aux from '../../hoc/Auxiliry'
import Burger from '../../components/Burger/Burger'
import BuilderControls from '../../components/Burger/BuildControls/BuildControls'
import Modal from '../../components/UI/Modal/Modal'
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary'
const INGREDEINTS_PRICE = { meat: 1.3, bacon: 0.7, cheese: 0.5, salad: 0.3 }
class BurgerBuilder extends Component {
    state = {
        ingredients: { meat: 0, bacon: 0, cheese: 0, salad: 0 },
        price: 4.0,
        isPurchasable: false,
        purchasing: false
    }
    addIngredientHandler = type => {
        const updatedIng = { ...this.state.ingredients }
        const newPrice = this.state.price + INGREDEINTS_PRICE[type];
        updatedIng[type] = updatedIng[type] + 1;
        this.setState((prevState, props) => {
            return {
                price: newPrice,
                ingredients: updatedIng
            }
        }, this.updatePurchaseState)

    }

    removeIngredientHandler = type => {
        const updatedIngs = { ...this.state.ingredients }
        const updatedPrice = this.state.price - INGREDEINTS_PRICE[type]
        updatedIngs[type] = updatedIngs[type] - 1;
        this.setState({
            ingredients: updatedIngs, price: updatedPrice
        }, this.updatePurchaseState)

        // this.updatePurchaseState();
    }

    purchaseHandler = () => {
        this.setState({ purchasing: true })
    }

    updatePurchaseState = () => {
        const Ingredients = {
            ...this.state.ingredients
        }

        const IngCount = Object.keys(Ingredients).map(Ing => {
            return Ingredients[Ing]
        }).reduce((prevVal, newVal) => {
            return prevVal + newVal
        }, 0)
        if (IngCount > 0) {
            this.setState({
                isPurchasable: true
            })
        } else {
            this.setState({
                isPurchasable: false
            })
        }
    }
    purchaseCancelHandler = () => {
        this.setState({
            purchasing: false
        })
    }
    purchaseContinueHandler = () => {
        alert("You are continue to buy!")
    }



    render() {
        const disabledInfo = { ...this.state.ingredients }
        for (const key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <= 0
        }
        return (
            <Aux>
                <Modal show={this.state.purchasing} modelClosed={this.purchaseCancelHandler}>
                    <OrderSummary
                        purchaseCancelled={this.purchaseCancelHandler}
                        purchaseContinued={this.purchaseContinueHandler}
                        ingredients={this.state.ingredients} 
                        price ={this.state.price}
                        />
                </Modal>
                <Burger ingredients={this.state.ingredients} />
                <BuilderControls
                    IngredientAdd={this.addIngredientHandler}
                    removeIng={this.removeIngredientHandler}
                    disabledInfo={disabledInfo}
                    price={this.state.price}
                    isPurchasable={this.state.isPurchasable}
                    purchasing={this.purchaseHandler}
                />

            </Aux>
        );
    }
}
export default BurgerBuilder