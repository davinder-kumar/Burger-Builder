import React, { Component, useState, useEffect } from 'react'
import { connect } from 'react-redux'
import Input from '../../components/UI/Forms/Input/Input'
import Button from '../../components/UI/Button/Button'
import classes from './Auth.module.css'
import Spinner from '../../components/UI/Spinner/Spinner'
import * as actionsList from '../../redux-store/actions'
import { Redirect } from 'react-router-dom'
import routes from '../../routes'
import { updateObject, checkValidity } from '../../Utilities/Utility'
const Auth = props => {

    const [isSignup, setSignup] = useState(true)
    const [authForm, updateAuthForm] = useState({
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
    })


}

useEffect(() =>{
    if (!this.props.buildingBurger && this.props.AuthRedirectPath !== routes.home) {
        this.props.onSetAuthPath("/");
    }
},[])


onChangeHandler = (e, controlName) => {
    // const updatedElement = { ...updatedForm[controlName] }
    const updatedElement = updateObject(this.state.controls[controlName], {
        value: e.target.value,
        isValid: checkValidity(e.target.value, this.state.controls[controlName].validation),
        touched: true,
        // isValid : isValid
    })
    const updatedForm = updateObject(this.state.controls, {
        [controlName]: updatedElement
    })

    this.setState({
        controls: updatedForm
    })
}


onSubmitHandler = (e) => {
    e.preventDefault()
    this.props.onAuth(this.state.controls.email.value, this.state.controls.password.value, this.state.isSignup)
}

onSwitchAuthHandler = (e) => {
    e.preventDefault()
    this.setState(
        prevState => {
            return {
                isSignup: !prevState.isSignup
            }
        }
    )
}

render() {
    let form = []
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
    let authRedirect = null
    if (this.props.isAuth) {
        authRedirect = <Redirect to={this.props.AuthRedirectPath} />
    }
    if (this.props.loading) {
        form = [<Spinner key="1" />]
    }

    return (
        <div className={classes.Auth}>
            {authRedirect}
            {this.props.error ? this.props.error : null}
            <form style={{ textAlign: "center" }}>
                {form}
                <Button clicked={(e) => this.onSubmitHandler(e)} btnType="Success">SUBMIT</Button>
                <Button clicked={(e) => this.onSwitchAuthHandler(e)} btnType="Danger">Proceed to {this.state.isSignup ? "Sign In" : "Sign Up"}</Button>
            </form>
        </div>
    )
}
}

export const mapStateToProps = (state) => {
    return {
        loading: state.auth.loading,
        error: state.auth.error,
        isAuth: state.auth.token !== null,
        buildingBurger: state.burgerBuilder.buildingBurger,
        AuthRedirectPath: state.auth.AuthRedirectPath
    }
}

export const mapDispatchToProps = (dispatch) => {
    return {
        onAuth: (email, password, isSignup) => dispatch(actionsList.auth(email, password, isSignup)),
        onSetAuthPath: (path) => dispatch(actionsList.setAuthRedirectPath(path))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Auth);