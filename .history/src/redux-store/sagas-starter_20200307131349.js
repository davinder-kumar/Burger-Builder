import { takeEvery } from 'redux-saga/effects'
import actionsList from '../redux-store/actionTypes'
export function* authLogoutStart(){
    yield takeEvery(actionsList.AUTO_LOGOUT_START )
}