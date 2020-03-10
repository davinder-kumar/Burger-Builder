import React, { useState, useEffect } from 'react'
import Aux from '../../hoc/Auxiliry/Auxiliry'
import Modal from '../../components/UI/Modal/Modal'
import {useHttp} from '../../hooks/hook-http-error'
const withErrorHandler = (WrappedEle, axios) => {
    return props => {
        const [error, CloseErrorHandler] = useHttp()
        return (
            <Aux>
                <Modal show={error} modelClosed={CloseErrorHandler}>
                    {error ? error.message : null}
                </Modal>
                <WrappedEle {...props} />
            </Aux>
        )
    }
}


export default withErrorHandler