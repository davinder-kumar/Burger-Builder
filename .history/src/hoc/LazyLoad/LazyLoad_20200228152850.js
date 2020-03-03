import React, { Component } from 'react'

const LazyLoad = (componentToLoad) => {
    
    return class extends Component {
        state = {
            component : null
        }
        componentWillMount() {
            componentToLoad()
            .then((res)=>{
                this.setState({
                    component : res.default
                })
            })
            .catch((error)=>{
                console.log(error);
            })
        }

        render(){
            return 
        }
    }
}

export default LazyLoad;