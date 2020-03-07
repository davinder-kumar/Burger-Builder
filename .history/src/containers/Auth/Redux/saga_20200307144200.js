import { put } from 'redux-saga/effects'
import * as actionTypes from '../../../redux-store/actionTypes'
export function* authLogout(){
    yield localStorage.removeItem("token")
    yield localStorage.removeItem("userId")
    yield localStorage.removeItem("tokenExpiryTime")
    yield put({
        type: actionTypes.AUTH_LOGOUT
    })
    yield setTimeout(() => {
        
    }, timeout);
    yield console.log("hre");
}