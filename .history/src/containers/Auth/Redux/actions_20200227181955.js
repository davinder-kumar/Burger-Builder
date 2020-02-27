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
        userId : localId
    }
}
export const authFail = (error) => {
    return {
        type: actionsList.AUTH_FAIL,
        error : error
    }
}

export const logoutUser = (expireTime) => {
    returndispatch => {
        setTimeout(function(){
            return {
                type : actionsList.AUTH_LOGOUT
            }
        }, 5 * 1000)
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
        if(!isSignUp){
            url= 'accounts:signInWithPassword?key=AIzaSyDn2xzmxqF6XuzvFCy4CU0iwqXDMLsnbcg'
        }

        axios.post(url, authData)
            .then((res) => {
                console.log(res)
                logoutUser(res.data.expiresIn);
                dispatch(authSuccess(res.data.idToken , res.data.localId));
            })
            .catch((error) => {
                dispatch(authFail(error.response.data.error.message));
            })
    }

}