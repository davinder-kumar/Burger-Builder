import React, { Component } from 'react'
import { element } from 'prop-types';

class Auth extends Component {
    state = {
        controls: {
            'email': {
                elementType : "input",
                elementConfig : {
                    type : "text",
                    placeholder : "Email"
                },
                validation : {
                    isEmail: true,
                    required : true
                },
                touched : false
            },
            'password': {
                elementType : "input",
                elementConfig : {
                    type : "password",
                    placeholder : "Email"
                },
                validation : {
                    isEmail: true,
                    required : true
                },
                touched : false
            }
        }
    }

    render(){
        return(
            <div>

            const form = this.state.controls.map(element => {
                console.log(element)
            })

                <form>

                </form>
            </div>
        )
    }
}

export default Auth;