import * as actionTypes from '../../../actionTypes'
import axois from '../../../axios-orders'

export const addIngrediant = (ingType) => {
    return {
        type: actionTypes.ADD_INGREDIANT,
        ingType: ingType
    }
}
export const removeIngredient = (ingType) => {
    return {
        type: actionTypes.REMOVE_INGREDIANT,
        ingType: ingType
    }
}

export const initIngredients = () => {
    return dispatch => {

        axois.get("/ingrediants.json")
            .then(response => {
                dispatch(initIngredientsRef(response.data))
            }).catch(error => {
                dispatch(initIngredientsFailed())
            })


    }
}
export const initIngredientsRef = (ings) => {
    return {
        type: actionTypes.INIT_INGREDIENTS,
        ings: ings
    }
}
export const initIngredientsFailed = () => {
    return {
        type: actionTypes.INIT_INGREDIENTS_FAILED
    }
}