import { put } from 'redux-saga/effects'
import * as actionTypes from '../../../redux-store/actionTypes'
function* authLogout{
    yield localStorage.removeItem("token")
    yield localStorage.removeItem("userId")
    yield localStorage.removeItem("tokenExpiryTime")
    yield put({
        type: actionTypes.
    })
}