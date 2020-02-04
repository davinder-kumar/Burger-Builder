import * as actionsList from '../actions'
const INGREDEINTS_PRICE = { meat: 1.3, bacon: 0.7, cheese: 0.5, salad: 0.3, paneer: 1.0 }
const initState = {
    ingredients: {
        bacon: 0,
        salad: 0,
        meat: 0,
        cheese: 0,
        paneer: 0
    },
    price: 4.0,

}
const burgerReducer = (state = initState, action) => {
    switch (action.type) {
        case (actionsList.ADD_INGREDIANT):
            return {
                ...state,
                ingredients: {
                    ...state.ingredients,
                    [action.ingType]: state.ingredients[action.ingType] + 1
                },
                price : state.price + INGREDEINTS_PRICE[action.ingType]
            }
        case (actionsList.REMOVE_INGREDIANT):
            return {
                ...state,
                ingredients: {
                    ...state.ingredients,
                    [action.ingType]: state.ingredients[action.ingType] - 1
                },
                price : state.price + INGREDEINTS_PRICE[action.ingType]
            }

            default : 

    }
    
}

export default burgerReducer