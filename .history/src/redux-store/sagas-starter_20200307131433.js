import { takeEvery } from 'redux-saga/effects'
import actionsList from '../redux-store/actionTypes'
import {authLogout} from '../containers/Auth/'
export function* authLogoutStart(){
    yield takeEvery(actionsList.AUTO_LOGOUT_START, )
}