import React, { Component } from 'react'

const LazyLoad = (componentToLoad) => {
    console.log(componentToLoad)
    return class extends Component {
        componentWillMount() {
            componentToLoad()
            .then(()=>{

            })
            .catch(()=>{
                
            })
        }
    }
}

export default LazyLoad;