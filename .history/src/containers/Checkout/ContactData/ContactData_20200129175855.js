import React, { Component } from 'react'
import Button from '../../../components/UI/Button/Button'
import classes from './ContactData.module.css'
import axois from '../../../axios-orders'

class ContactData extends Component {
    state = {
        name: '',
        email: '',
        address: {
            street: '',
            postalCode: ''
        },
        loading :false,
        ingredients : null,
        price: null
    }

    orderHandler = (event) => {
        event.preventDefault()
        this.setState({
            loading: true
        })
        const order = {
            ingredients: this.props.ingredients,
            price: this.props.price,
            customer: {
                name: 'Davinder Kumar',
                address: {
                    street: "Amarpali Princely",
                    zip: "20304",
                    country: "India"
                },
                email: "davinderkumar8166@gmail.com"
            },
            deliveryMethod: "fastest"
        }

        axois.post('/orders.json', order)
            .then(response => {
                this.setState({
                    loading: false, purchasing: false
                })
                this.props.replace("/");
            })
            .catch(error => {
                this.setState({
                    loading: false, purchasing: false
                })
            })
    }

    render() {
        return (
            <div className={classes.ContactData}>
                <h2>Contact Us</h2>
                <form>
                    <input className={classes.Input} type="text" name="name" placeholder="Name" />
                    <input className={classes.Input} type="text" name="email" placeholder="Email" />
                    <input className={classes.Input} type="text" name="street" placeholder="Street" />
                    <input className={classes.Input} type="text" name="zip" placeholder="Zip" />
                    <Button clicked={this.orderHandler} btnType="Success">ORDER</Button>
                </form>
            </div>
        );
    }
}
export default ContactData