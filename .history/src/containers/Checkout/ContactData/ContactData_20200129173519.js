import React , {Component} from 'react'
import Button from '../../../components/UI/Button/Button'
 import classes from './ContactData.module.css'

class ContactData extends Component{
    state ={
        name : '',
        email : '',
        address : {
            street : '',
            postalCode : ''
        },
    }

    orderHandler =()

    render(){
        return(
            <div className={classes.ContactData}>
                <h2>Contact Us</h2>
                <form>
                    <input className={classes.Input} type="text" name="name" placeholder="Name" />
                    <input className={classes.Input} type="text" name="email" placeholder="Email"  />
                    <input className={classes.Input} type="text" name="street" placeholder="Street" />
                    <input className={classes.Input} type="text" name="zip" placeholder="Zip" />
                    <Button clicked={this.orderHandler} btnType="Success">ORDER</Button>
                </form>
            </div>
        );
    }
}
export default ContactData