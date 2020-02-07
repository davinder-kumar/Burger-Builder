import * as actionTypes from './actionTypes'

export const addIngrediantRef = (ingType) => {
    return {
        type: actionTypes.ADD_INGREDIANT,
        ingType : ingType
    }
}

export const addIngrediant = (ingType) =>{
    
    return dispatch => {
        console.log(dispatch);
        dispatch(addIngrediantRef(ingType))
    }
}
export const removeIngredient = (ingType) => {
    return {
        type: actionTypes.REMOVE_INGREDIANT,
        ingType : ingType
    }
}