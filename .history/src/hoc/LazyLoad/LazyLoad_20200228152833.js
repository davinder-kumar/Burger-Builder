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
                    
                })
            })
            .catch((error)=>{
                console.log(error);
            })
        }

        render(){
            return(
                <p>TEst</p>
            )
        }
    }
}

export default LazyLoad;