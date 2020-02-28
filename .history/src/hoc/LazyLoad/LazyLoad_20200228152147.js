import React, { Component } from 'react'

const LazyLoad = (componentToLoad) => {
    console.log(componentToLoad().then())
    return class extends Component {
        componentWillMount() {
            console.log(componentToLoad())
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