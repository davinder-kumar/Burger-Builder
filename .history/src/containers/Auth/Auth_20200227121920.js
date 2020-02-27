import React, { Component } from 'react'
import { connect } from 'react-redux'
import Input from '../../components/UI/Forms/Input/Input'
import Button from '../../components/UI/Button/Button'
import classes from './Auth.module.css'
import { auth } from '../Auth/Redux/actions'
class Auth extends Component {
    state = {
        isSignup : true,
        controls: {
            'email': {
                elementType: "input",
                elementConfig: {
                    type: "text",
                    placeholder: "Email"
                },
                validation: {
                    isEmail: true,
                    required: true
                },
                touched: false,
                value: '',
                isValid: false,
            },
            'password': {
                elementType: "input",
                elementConfig: {
                    type: "password",
                    placeholder: "Password"
                },
                validation: {
                    required: true
                },
                touched: false,
                value: '',
                isValid: false,
            }
        }
    }

    onChangeHandler = (e, controlName) => {
        const updatedForm = { ...this.state.controls }
        const updatedElement = { ...updatedForm[controlName] }
        const value = e.target.value
        const isValid = this.checkValidity(value, updatedForm[controlName].validation)
        updatedElement.value = value
        updatedElement.touched = true
        updatedElement.isValid = isValid
        updatedForm[controlName] = updatedElement

        this.setState({
            controls: updatedForm
        })
    }

    checkValidity = (value, rules) => {
        let isValid = true
        if (!rules) {
            return true;
        }
        if (rules.required) {
            isValid = value.trim() !== '' && isValid
        }
        if (rules.isEmail) {
            var re = /\S+@\S+\.\S+/;
            isValid = re.test(value) && isValid
        }

        return isValid

    }

    onSubmitHandler = (e) => {
        e.preventDefault()
        this.props.onAuth(this.state.controls.email.value,this.state.controls.password.value)
    }

    onSwitchAuthHandler = () =>{
        this.setState(
            prevState => {
                return {
                    
                }
            }
        )
    }

    render() {
        const form = []
        for (let i in this.state.controls) {
            form.push(
                <Input key={i}
                    elementtype={this.state.controls[i].elementType}
                    value={this.state.controls[i].value}
                    elementconfig={this.state.controls[i].elementConfig}
                    clicked={(e) => this.onChangeHandler(e, i)}
                    shouldValidate={this.state.controls[i].validation}
                    isValid={this.state.controls[i].isValid}
                    touched={this.state.controls[i].touched}
                />
            );
        }
        // console.log(form)
        // const form = this.state.controls.map(element => {
        //     console.log(element)
        // })
        return (
            <div className={classes.Auth}>
                <form>
                    {form}
                    <Button clicked={(e) => this.onSubmitHandler(e)} btnType="Success">SUBMIT</Button>
                    <Button clicked={(e) => this.onSwitchAuthHandler(e)} btnType="Danger">Proceed to SIGNUP</Button>
                </form>
            </div>
        )
    }
}

export const mapDispatchToProps = (dispatch) => {
    return {
        onAuth: (email, password) => dispatch(auth(email, password))
    }
}

export default connect(null,mapDispatchToProps)(Auth);