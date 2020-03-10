import React, { Component, useState } from 'react'
import Aux from '../../hoc/Auxiliry/Auxiliry'
import Modal from '../../components/UI/Modal/Modal'
const withErrorHandler = (WrappedEle, axios) => {
    return props => {

        const [error, setError] = useState(null)
        
            this.reqInterceptor =  axios.interceptors.request.use(req => {
                this.setState({
                    error: null
                })
                return req;
            })
            this.resInterceptor = axios.interceptors.response.use(res => res, error => {
                this.setState({
                    error: error
                })
                return Promise.reject(error)
                // return res
            })
        componentWillUnmount(){
            axios.interceptors.request.eject(this.reqInterceptor)
            axios.interceptors.request.eject(this.resInterceptor)
        }

        CloseErrorHandler = () =>{
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