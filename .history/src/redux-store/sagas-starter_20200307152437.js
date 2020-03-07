import { takeEvery } from 'redux-saga/effects'
import * as actionsList from '../redux-store/actionTypes'
import {authLogout} from '../containers/Auth/Redux/saga'
export function* authLogoutStart(){
    yield takeEvery(actionsList.AUTO_LOGOUT_START, authLogout)
}

export function* initCheckExpiryTime(){
    yield takeEvery(actionsList.INIT_CHECK_EXPIRE_TIME , )
}