import * as actionTypes from './actionTypes'

export const addIngrediant = (ingType) => {
    return {
        type: actionTypes.ADD_INGREDIANT,
        ingType : ingType
    }
}
export const removeIngredient = (ingType) => {
    return {
        type: actionTypes.REMOVE_INGREDIANT,
        ingType : ingType
    }
}

export const initIngredients = () =>{
    return dispatch => {

        axois.get("/ingrediants.json")
            .then(response => {
                this.setState({
                    ingredients: response.data
                })
            }).catch(error => {
                this.setState({
                    isError: true
                })
            })

        
    }
}
export const initIngredientsRef = () => {
    return {
        type: actionTypes.INIT_INGREDIENTS
    }
}