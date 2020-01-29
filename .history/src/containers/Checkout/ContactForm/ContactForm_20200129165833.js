import React , {Component} from 'react'
import Button from '../../../components/UI/Button/Button'
 import classes from './ContactForm.module.css'

class ContactForm extends Component{
    state ={
        name : '',
        email : '',
        address : {
            street : '',
            postalCode : ''
        },
    }
    render(){
        return(
            <div className={classes}>
                <h2>Contact Us</h2>
                <form>
                    <input type="text" name="name" placeholder="Name" />
                    <input type="text" name="email" placeholder="Email"  />
                    <input type="text" name="street" placeholder="Street" />
                    <input type="text" name="zip" placeholder="Zip" />
                    <Button btnType="Success">ORDER</Button>
                </form>
            </div>
        );
    }
}
export default ContactForm