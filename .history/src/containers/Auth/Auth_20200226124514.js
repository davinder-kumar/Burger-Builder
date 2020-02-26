import React, { Component } from 'react'

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
                    type : "text",
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
}

export default Auth;