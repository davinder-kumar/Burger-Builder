import React, { Component } from 'react'

const LazyLoad = (componentToLoad) => {
    
    return class extends Component {
        state = {
            component : 
        }
        componentWillMount() {
            componentToLoad()
            .then((res)=>{
                console.log(res);
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