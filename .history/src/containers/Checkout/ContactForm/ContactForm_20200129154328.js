import React , {Component} from 'react'
 import classes from '*.module.css'

class ContactForm extends Component{
    render(){
        return(
            <div>
                <form>
                    <input type="text" name="name" placeholder="name" />
                    <input type="text" name="email" placeholder="Email"  />
                    <input type="text" name="zip" placeholder="Zip" />
                    <input type="text" name="nane" />
                </form>
            </div>
        );
    }
}