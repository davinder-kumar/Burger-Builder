import { put, delay } from 'redux-saga/effects'
import * as  actions from '../../../redux-store/actions'
export function* authLogoutSagaWorker(action) {
    yield localStorage.removeItem("token")
    yield localStorage.removeItem("userId")
    yield localStorage.removeItem("tokenExpiryTime")
    yield put(actions.logoutUserSucceed())
}

export function* checkExpireTimeSagaWorker(action) {
    delay(action.expiryTime)
    yield put(actions.logoutUser())
}

export function* authWorker(action) {
        dispatch(authStart())
        const authData = {
            email: email,
            password: password,
            returnSecureToken: true
        }

        let url = 'accounts:signUp?key=AIzaSyDn2xzmxqF6XuzvFCy4CU0iwqXDMLsnbcg'
        if (!isSignUp) {
            url = 'accounts:signInWithPassword?key=AIzaSyDn2xzmxqF6XuzvFCy4CU0iwqXDMLsnbcg'
        }

        axios.post(url, authData)
            .then((res) => {
                // console.log(res)
                dispatch(checkExpireTime(res.data.expiresIn));
                dispatch(authSuccess(res.data.idToken, res.data.localId));

                localStorage.setItem("token", res.data.idToken)
                localStorage.setItem("userId", res.data.localId)
                const tokenTime = new Date(new Date().getTime() + res.data.expiresIn * 1000)
                localStorage.setItem("tokenExpiryTime", tokenTime)
            })
            .catch((error) => {
                dispatch(authFail(error.response.data.error.message));
            })
}