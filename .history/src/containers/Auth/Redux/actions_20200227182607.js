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
    console.log("here");
    dispatch(logoutUser());
    return dispatch => {
        // console.log("here2");
        setTimeout(() => {
            console.log("here3");
            dispatch(logoutUser());
        }, 200)
    }
}

export const logoutUser = () => {
    return {
        type: actionsList.AUTH_LOGOUT
    }
}

export const auth = (email, password, isSignUp) => {
    return (dispatch) => {
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
                console.log(res)
                checkExpireTime(res.data.expiresIn);
                dispatch(authSuccess(res.data.idToken, res.data.localId));
            })
            .catch((error) => {
                dispatch(authFail(error.response.data.error.message));
            })
    }

}