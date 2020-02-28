import React, { Component } from 'react'

// const LazyLoad = (componentToLoad) => {
//     console.log(componentToLoad().then((res)=>{
//         console.log(res)
//     }))
    return class extends Component {
        componentWillMount() {
            console.log(componentToLoad(),"dasdsa")
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