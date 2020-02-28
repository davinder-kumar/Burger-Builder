import React, { Component } from 'react'

const LazyLoad = (componentToLoad) => {
    console.log(componentToLoad)
    return class extends Component {
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