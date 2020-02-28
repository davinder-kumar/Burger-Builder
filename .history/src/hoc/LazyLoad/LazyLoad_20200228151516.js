import React, { Component } from 'react'

const LazyLoad = (componentToLoad) => {
    console.log(componentToLoad)
    return class extends Component {
        componentWillMount() {
            componentToLoad()
            .then((res)=>{
                console,log(res)
            })
            .catch((error)=>{
                console,log(error)
            })
        }
    }
}

export default LazyLoad;