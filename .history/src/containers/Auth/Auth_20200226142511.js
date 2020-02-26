import React, { Component } from 'react'
import Input from '../../components/UI/Forms/Input/Input'
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
                touched : false,
                value : ''
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
                touched : false,
                value : 'madrchod'
            }
        }
    }

    render(){
        const form =[]
        for(let i in this.state.controls){
            console.log(this.state.controls[i])
            form.push(
                <Input key={i} 
                elementtype={this.state.controls[i].elementType}
                value ={this.state.controls[i].value}
                
                
                />
            );
        }
        console.log(form)
        // const form = this.state.controls.map(element => {
        //     console.log(element)
        // })
        return(
            <div>

            

                <form>
                    {form}
                </form>
            </div>
        )
    }
}

export default Auth;