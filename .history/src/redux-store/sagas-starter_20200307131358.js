import { takeEvery } from 'redux-saga/effects'
import actionsList from '../redux-store/actionTypes'
import 
export function* authLogoutStart(){
    yield takeEvery(actionsList.AUTO_LOGOUT_START, )
}