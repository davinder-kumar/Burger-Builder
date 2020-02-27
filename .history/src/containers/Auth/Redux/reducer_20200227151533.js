import * as actionTypes from '../../../redux-store/actionTypes'
import updateObject from '../../../redux-store/utility'

const initState = {
    userId: null,
    token: null,
    error: null,
    loading: null
}

const authStart = (state,action){ 
    reutnr 
}

const reducer = (state = initState, action) => {
    switch(action.type){
        case actionTypes.AUTH_START :
            return updateObject(statem)
        default:
            return state
    }
}

export default reducer

