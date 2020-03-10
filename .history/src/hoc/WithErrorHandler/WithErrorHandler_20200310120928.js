import React, { Component, useState, useEffect } from 'react'
import Aux from '../../hoc/Auxiliry/Auxiliry'
import Modal from '../../components/UI/Modal/Modal'
const withErrorHandler = (WrappedEle, axios) => {
    return props => {

        const [error, setError] = useState(null)

        const reqInterceptor = axios.interceptors.request.use(req => {
            setError(null)
            return req;
        })
        const resInterceptor = axios.interceptors.response.use(res => res, error => {
            setError(error)
            return Promise.reject(error)
        })
        useEffect(() => {
            return () => {
                axios.interceptors.request.eject(this.reqInterceptor)
                axios.interceptors.request.eject(this.resInterceptor)
            }
        })

    }

    CloseErrorHandler = () => {
        this.setState({
            error: null
        })
    }

    render() {
        return (
            <Aux>
                <Modal show={this.state.error} modelClosed={this.CloseErrorHandler}>
                    {this.state.error ? this.state.error.message : null}
                </Modal>
                <WrappedEle {...this.props} />
            </Aux>
        )
    }
}

}

export default withErrorHandler