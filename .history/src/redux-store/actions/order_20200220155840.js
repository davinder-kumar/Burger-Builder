import * as actionTypes from './actionTypes'

export const burderOrderSuccess = () => {
    return dispatch => {
        axois.post('/orders.json', order)
            .then(response => {
                this.setState({
                    loading: false
                })
                // this.props.history.replace("/");
                window.location = '/'
            })
            .catch(error => {
                this.setState({
                    loading: false
                })
                // this.props.replace("/");
            })
    }

}