import React, { Component } from 'react'
import Aux from '../../hoc/Auxiliry/Auxiliry'
import Burger from '../../components/Burger/Burger'
import BuilderControls from '../../components/Burger/BuildControls/BuildControls'
import Modal from '../../components/UI/Modal/Modal'
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary'
import axois from '../../axios-orders'
import Spinner from '../../components/UI/Spinner/Spinner'
import WithErrorHandler from '../../hoc/WithErrorHandler/WithErrorHandler'
const INGREDEINTS_PRICE = { meat: 1.3, bacon: 0.7, cheese: 0.5, salad: 0.3, paneer: 1.0 }
class BurgerBuilder extends Component {
    state = {
        ingredients: null,
        price: 4.0,
        isPurchasable: false,
        purchasing: false,
        loading: false,
        isError: false
    }

    componentDidMount() {
        axois.get("/ingrediants.json")
            .then(response => {
                this.setState({
                    ingredients: response.data
                })
            }).catch(error => {
                this.setState({
                    isError: true
                })
            })
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
            loading: false, purchasing: false
        })
    }
    purchaseContinueHandler = () => {

        // this.setState({
        //     loading: true
        // })
        // const order = {
        //     ingredients: this.state.ingredients,
        //     price: this.state.price,
        //     customer: {
        //         name: 'Davinder Kumar',
        //         address: {
        //             street: "Amarpali Princely",
        //             zip: "20304",
        //             country: "India"
        //         },
        //         email: "davinderkumar8166@gmail.com"
        //     },
        //     deliveryMethod: "fastest"
        // }

        // axois.post('/orders.json', order)
        //     .then(response => {
        //         this.setState({
        //             loading: false, purchasing: false
        //         })
        //         this.props.history.replace("/checkout");
        //     })
        //     .catch(error => {
        //         this.setState({
        //             loading: false, purchasing: false
        //         })
        //     })
        const ingrediants = this.state.ingredients
        const params = []
        for (var key in ingrediants) {
            console.log(key, ingrediants[key]);
            params.push(  )
        }
        // this.props.history.push("/checkout");
    }

    render() {
        const disabledInfo = { ...this.state.ingredients }
        for (const key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <= 0
        }

        let burger = this.state.isError ? "Aplication is broken somehow! " : <Spinner />
        let orderSummry = <Spinner />
        if (this.state.ingredients) {
            burger = (
                <Aux>
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
            orderSummry = (
                <OrderSummary
                    purchaseCancelled={this.purchaseCancelHandler}
                    purchaseContinued={this.purchaseContinueHandler}
                    ingredients={this.state.ingredients}
                    price={this.state.price}
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
export default WithErrorHandler(BurgerBuilder, axois)