import axios from '../../../axios-auth'
import * as actionsList from '../../../redux-store/actionTypes'
export const authStart = () => {
    return {
        type: "AUTH_START",
    }
}
export const authSuccess = (token, localId) => {
    return {
        type: actionsList.AUTH_SUCCESS,
        token: token,
        userId: localId
    }
}
export const authFail = (error) => {
    return {
        type: actionsList.AUTH_FAIL,
        error: error
    }
}

export const checkExpireTime = (expireTime) => {
    return {
        type : actionsList.INIT_CHECK_EXPIRE_TIME,
        expiryTime : expireTime
    }
}

export const logoutUser = () => {
    return {
        type: actionsList.AUTO_LOGOUT_START

    }
}

export const logoutUserSucceed = () =>{
    return {
        type: actionsList.AUTH_LOGOUT
    }
}

export const setAuthRedirectPath = (path) => {
    return {
        type: actionsList.SET_REDIRECT_PATH,
        path: path
    }
}

export const auth = (email, password, isSignUp) => {
    return {
        type: 
    }
    // return (dispatch) => {
    //     dispatch(authStart())
    //     const authData = {
    //         email: email,
    //         password: password,
    //         returnSecureToken: true
    //     }

    //     let url = 'accounts:signUp?key=AIzaSyDn2xzmxqF6XuzvFCy4CU0iwqXDMLsnbcg'
    //     if (!isSignUp) {
    //         url = 'accounts:signInWithPassword?key=AIzaSyDn2xzmxqF6XuzvFCy4CU0iwqXDMLsnbcg'
    //     }

    //     axios.post(url, authData)
    //         .then((res) => {
    //             // console.log(res)
    //             dispatch(checkExpireTime(res.data.expiresIn));
    //             dispatch(authSuccess(res.data.idToken, res.data.localId));

    //             localStorage.setItem("token", res.data.idToken)
    //             localStorage.setItem("userId", res.data.localId)
    //             const tokenTime = new Date(new Date().getTime() + res.data.expiresIn * 1000)
    //             localStorage.setItem("tokenExpiryTime", tokenTime)
    //         })
    //         .catch((error) => {
    //             dispatch(authFail(error.response.data.error.message));
    //         })
    // }

}

export const autoLoginUser = () => {
    return dispatch => {
        const token = localStorage.getItem("token");
        if (!token) {
            dispatch(logoutUser())
        } else {

            const expiryTime = localStorage.getItem("tokenExpiryTime");
            if (new Date(expiryTime) <= new Date()) {
                dispatch(logoutUser())
            } else {
                const userId = localStorage.getItem("userId");
                dispatch(authSuccess(token, userId))
                const timeLeft = (new Date(expiryTime).getTime() - new Date().getTime()) / 1000;
                dispatch(checkExpireTime(timeLeft))
            }
        }

    }
}