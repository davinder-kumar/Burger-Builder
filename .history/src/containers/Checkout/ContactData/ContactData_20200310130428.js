import React, { Component, useState } from 'react'
import Button from '../../../components/UI/Button/Button'
import classes from './ContactData.module.css'
import axois from '../../../axios-orders'
import Spinner from '../../../components/UI/Spinner/Spinner'
import Input from '../../../components/UI/Forms/Input/Input'
import Witherror from '../../../hoc/WithErrorHandler/WithErrorHandler'
import * as actionTypes from '../../../redux-store/actions/index'
import { updateObject, checkValidity } from '../../../Utilities/Utility'
import { connect } from 'react-redux'
const ContactData =props=> {
    const [isFormValid,setFormValid] = useState(false)
    const [orderForm,setorderForm] = useState(false)
    state = {
        isFormValid: false,
        orderForm: {
            name: {
                elementtype: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Your Name'
                },
                value: '',
                validation: {
                    required: true
                },
                isValid: false,
                touched: false
            },
            email: {
                elementtype: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Your E-Mail'
                },
                value: '',
                validation: {
                    required: true,
                    email: true
                },
                isValid: false,
                touched: false

            },
            street: {
                elementtype: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Street'
                },
                value: '',
                validation: {
                    required: true
                },
                isValid: false,
                touched: false
            },
            postalCode: {
                elementtype: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'ZIP code'
                },
                value: '',
                validation: {
                    required: true,
                    minLength: 4,
                    maxLength: 6
                },
                isValid: false,
                touched: false

            },
            country: {
                elementtype: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Country'
                },
                value: '',
                validation: {
                    required: true
                },
                isValid: false,
                touched: false
            },
            deliveryMethod: {
                elementtype: 'select',
                elementConfig: {
                    options: [
                        { value: 'fastest', displayValue: "Fastest" },
                        { value: 'cheapest', displayValue: "Cheapest" }
                    ]
                },
                value: 'fastest',
                validation: {},
                isValid: true
            },
        }
    }
    orderHandler = (event) => {
        event.preventDefault()

        const orderData = {}
        for (let formIdentifier in this.state.orderForm) {
            orderData[formIdentifier] = this.state.orderForm[formIdentifier].value
        }
        const order = {
            ingredients: this.props.ingredients,
            price: this.props.price,
            orderData: orderData,
            userId: this.props.userId

        }
        this.props.burderOrderInit(order, this.props.token, this.props.userId);
    }
    onChangeHandler = (event, identifier) => {

        const updatedElement = updateObject(this.state.orderForm[identifier],
            {
                value: event.target.value,
                isValid: checkValidity(event.target.value, this.state.orderForm[identifier].validation),
                touched: true
            }
        );

        const updatedOrderForm = updateObject(this.state.orderForm,
            {
                [identifier]: updatedElement
            }
        )

        let isFormValidStatus = true
        for (let i in updatedOrderForm) {
            isFormValidStatus = updatedOrderForm[i].isValid & isFormValidStatus
        }
        this.setState({
            orderForm: updatedOrderForm,
            isFormValid: isFormValidStatus
        })
    }

    

    render() {
        const inputEleArray = []
        for (let i in this.state.orderForm) {
            inputEleArray.push({
                id: i,
                config: this.state.orderForm[i],
            })
        }
        let form = (
            <form onSubmit={this.orderHandler}>
                {inputEleArray.map(element => {
                    return <Input
                        value={element.config.value}
                        elementconfig={element.config.elementConfig}
                        elementtype={element.config.elementtype}
                        clicked={(event) => this.onChangeHandler(event, element.id)}
                        isValid={element.config.isValid}
                        touched={element.config.touched}
                        shouldValidate={element.config.validation}
                        key={element.id} />
                })}
                <Button disabled={!this.state.isFormValid} btnType="Success">ORDER</Button>
            </form>
        );
        if (this.props.loading) {
            form = <Spinner />
        }
        return (
            <div className={classes.ContactData}>
                <h2>Contact Us</h2>
                {form}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    // console.log(state)
    return {
        ingredients: state.burgerBuilder.ingredients,
        price: state.burgerBuilder.price,
        loading: state.order.loading,
        token: state.auth.token,
        userId: state.auth.userId
    }
}

const mapDispathToProps = (dispatch) => {
    return {
        burderOrderInit: (orderData, token) => dispatch(actionTypes.burderOrderInit(orderData, token))
    }
}

// export default connect(mapStateToProps)(Checkout)

export default connect(mapStateToProps, mapDispathToProps)(Witherror(ContactData, axois))