import React, { Component } from 'react'
import Button from '../../../components/UI/Button/Button'
import classes from './ContactData.module.css'
import axois from '../../../axios-orders'
import Spinner from '../../../components/UI/Spinner/Spinner'
import Input from '../../../components/UI/Forms/Input/Input'
import Witherror from '../../../hoc/WithErrorHandler/WithErrorHandler'
import { connect } from 'react-redux'
class ContactData extends Component {
    state = {
        loading: false,
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
                    required: true
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
        this.setState({
            loading: true
        })
        const orderData = {}
        for (let formIdentifier in this.state.orderForm) {
            orderData[formIdentifier] = this.state.orderForm[formIdentifier].value
        }
        const order = {
            ingredients: this.props.ingredients,
            price: this.props.price,
            orderData: orderData

        }
        // burderOrderInit
        // console.log(order)

        
    }
    onChangeHandler = (event, identifier) => {
        const updatedOrderFrom = { ...this.state.orderForm }
        const updatedElement = { ...updatedOrderFrom[identifier] }
        updatedElement.value = event.target.value
        updatedElement.isValid = this.checkValidity(updatedElement.value, updatedElement.validation)
        updatedElement.touched = true
        updatedOrderFrom[identifier] = updatedElement

        let isFormValidStatus = true
        for (let i in updatedOrderFrom) {
            isFormValidStatus = updatedOrderFrom[i].isValid & isFormValidStatus
        }
        this.setState({
            orderForm: updatedOrderFrom,
            isFormValid: isFormValidStatus
        })
    }

    checkValidity = (value, rules) => {
        let isValid = true
        if (!rules) {
            return true;
        }

        if (rules.required) {
            isValid = value.trim() !== '' && isValid
        }
        if (rules.minLength) {
            isValid = value.trim().length >= rules.minLength && isValid
        }
        if (rules.maxLength) {
            isValid = value.trim().length <= rules.maxLength && isValid
        }

        return isValid

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
        if (this.state.loading) {
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

const mapStateToProps =(state) =>{
    return{
        ingredients : state.ingredients,
        price : state.price
    }
}

const mapDispathToProps = (dispatch) =>{
    return {
        burderOrderInit : (orderData) 
    }
}

// export default connect(mapStateToProps)(Checkout)

export default connect(mapStateToProps)(Witherror(ContactData, axois))