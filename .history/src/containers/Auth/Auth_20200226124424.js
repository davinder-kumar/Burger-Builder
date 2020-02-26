import React, { Component } from 'react'

class Auth extends Component {
    state = {
        controls: {
            'email': {
                elementType : "input",
                elementConfig : {
                    type : "text",
                    placeholder : "Email"
                }
            }
        }
    }
}

export default Auth;