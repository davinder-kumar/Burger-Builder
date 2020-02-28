import React, { Component } from 'react'

const LazyLoad = (componentToLoad) => {
    console.log(componentToLoad.response)
    return class extends Component {
        componentWillMount() {
            componentToLoad()
            .then((res)=>{
                console.og(res);
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