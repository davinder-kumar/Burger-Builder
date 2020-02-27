import axios from '../../../axios-auth'
export const authStart = () => {
    return {
        type: "AUTH_START",
    }
}
export const authSuccess = (token, localId) => {
    return {
        type: "AUTH_SUCCESS",
        token: token,
        userId : localId
    }
}
export const authFail = (error) => {
    return {
        type: "AUTH_FAIL",
        error : error
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
                dispatch(authSuccess(res.data.));
            })
            .catch((error) => {
                console.log(error)
                dispatch(authFail(error));
            })
    }

}