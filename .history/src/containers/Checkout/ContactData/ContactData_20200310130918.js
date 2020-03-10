import React, {  useState } from 'react'
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
    const [orderForm,setorderForm] = useState({
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
        }})
    const orderHandler = (event) => {
        event.preventDefault()

        const orderData = {}
        console.log(orderForm)
        for (let formIdentifier in orderForm) {
            orderData[formIdentifier] = orderForm[formIdentifier].value
        }
        const order = {
            ingredients: props.ingredients,
            price: props.price,
            orderData: orderData,
            userId: props.userId

        }
        props.burderOrderInit(order, props.token, props.userId);
    }
    const onChangeHandler = (event, identifier) => {

        const updatedElement = updateObject(orderForm[identifier],
            {
                value: event.target.value,
                isValid: checkValidity(event.target.value, orderForm[identifier].validation),
                touched: true
            }
        );

        const updatedOrderForm = updateObject(orderForm,
            {
                [identifier]: updatedElement
            }
        )

        let isFormValidStatus = true
        for (let i in updatedOrderForm) {
            isFormValidStatus = updatedOrderForm[i].isValid & isFormValidStatus
        }
        setFormValid(isFormValidStatus)
        setorderForm(updatedOrderForm)
    }

    

        const inputEleArray = []
        for (let i in orderForm) {
            inputEleArray.push({
                id: i,
                config: orderForm[i],
            })
        }
        let form = (
            <form onSubmit={orderHandler}>
                {inputEleArray.map(element => {
                    return <Input
                        value={element.config.value}
                        elementconfig={element.config.elementConfig}
                        elementtype={element.config.elementtype}
                        clicked={(event) => onChangeHandler(event, element.id)}
                        isValid={element.config.isValid}
                        touched={element.config.touched}
                        shouldValidate={element.config.validation}
                        key={element.id} />
                })}
                <Button disabled={isFormValid} btnType="Success">ORDER</Button>
            </form>
        );
        if (props.loading) {
            form = <Spinner />
        }
        return (
            <div className={classes.ContactData}>
                <h2>Contact Us</h2>
                {form}
            </div>
        );
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