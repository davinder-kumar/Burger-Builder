import * as actionTypes from '../../../redux-store/actionTypes'
import utility from '../../../'

const initState = {
    userId: null,
    token: null,
    error: null,
    loading: null
}
const reducer = (state = initState, action) => {
    switch(action.type){
        case actionTypes.AUTH_START :
            return state
        default:
            return state
    }
}

export default reducer

