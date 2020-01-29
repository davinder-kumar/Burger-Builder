import React , {Component} from 'react'
//  import classes from '*.module.css'

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
            <div>
                <h2>Contact Us</h2>
                <form>
                    <input type="text" name="name" placeholder="Name" />
                    <input type="text" name="email" placeholder="Email"  />
                    <input type="text" name="zip" placeholder="Zip" />
                    <input type="text" name="street" placeholder="Street" />
                </form>
            </div>
        );
    }
}
export default ContactForm