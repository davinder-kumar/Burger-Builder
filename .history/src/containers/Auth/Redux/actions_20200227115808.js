import axios from '../../../axios-auth'
export const authStart = () => {
    return {
        type: "AUTH_START",
    }
}
export const authSuccess = (authData) => {
    return {
        type: "AUTH_SUCCESS",
        authData : authData
    }
}
export const authFail = (error) => {
    return {
        type: "AUTH_FAIL",
    }
}

export const auth = (email, password) =>{
    return (dispatch) => {
        dispatch(authStart())
        const authData = {
            email : email,
            password : password,
            returnSecureToken:true
        }
        axios.post("accounts:signUp?key=AIzaSyDn2xzmxqF6XuzvFCy4CU0iwqXDMLsnbcg",authData)
        .then((res) => {
            authSuccess(res.data);
        })
        .catch((error) => {
            authFail(error);
        })
    }
    
}