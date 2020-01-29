import React , {Component} from 'react'
 import classes from '*.module.css'

class ContactForm extends Component{
    render(){
        return(
            <div>
                <form>
                    <input type="text" name="name" placeholder="name" />
                    <input type="text" name="email" placeholder="email"  />
                    <input type="text" name="zip" placeholder="Z" />
                    <input type="text" name="nane" />
                </form>
            </div>
        );
    }
}