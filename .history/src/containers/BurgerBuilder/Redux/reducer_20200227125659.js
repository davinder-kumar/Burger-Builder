import * as actionsList from '../../../redux-store/actions/actionTypes'
import { updateObject } from '../../../redux-store/utility'
const INGREDEINTS_PRICE = { meat: 1.3, bacon: 0.7, cheese: 0.5, salad: 0.3, paneer: 1.0 }
const initState = {
    ingredients: null,
    price: 4.0,
    isError: false

}

export const addIngrediant = (state, action) => {
    const updatedIng = {
        [action.ingType]: state.ingredients[action.ingType] + 1
    }

    const updatedIngs = updateObject(state.ingredients, updatedIng);
    return updateObject(state, {
        ingredients: updatedIngs,
        price: state.price + INGREDEINTS_PRICE[action.ingType]
    });
}

export const removeIngrediant = (state, action) => {

    const updateingg = { [action.ingType]: state.ingredients[action.ingType] - 1 }
    const updatedIngss = updateObject(state.ingredients, updateingg);
    const result = updateObject(state, {
        ingredients: updatedIngss,
        price: state.price - INGREDEINTS_PRICE[action.ingType]
    })

    return result;
}

export const initIngs = (state, action) => {
    return updateObject(state, {
        ingredients: {
            salad: action.ings.salad,
            meat: action.ings.meat,
            bacon: action.ings.bacon,
            cheese: action.ings.cheese,
            paneer: action.ings.paneer,
        },
        price: initState.price
    })
}

export const initIngsFail = (state, action) => {
    return updateObject(state, {
        isError: true
    })
}

const burgerReducer = (state = initState, action) => {
    switch (action.type) {
        case (actionsList.ADD_INGREDIANT): return addIngrediant(state, action);
        case (actionsList.REMOVE_INGREDIANT): return removeIngrediant(state, action)
        case (actionsList.INIT_INGREDIENTS): return initIngs(state, action);
        case (actionsList.INIT_INGREDIENTS_FAILED): return initIngsFail(state, action);
        default:
            return state
    }

}

export default burgerReducer