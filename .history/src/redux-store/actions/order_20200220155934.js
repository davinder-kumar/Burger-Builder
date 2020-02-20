import * as actionTypes from './actionTypes'

export const burderOrderInit = () => {
    return dispatch => {
        axois.post('/orders.json', order)
            .then(response => {
                
            })
            .catch(error => {
                this.setState({
                    loading: false
                })
                // this.props.replace("/");
            })
    }

}