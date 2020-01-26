import axios from 'axios'

const instance = axios.create({
    baseURL : "https://burger-builder-kanu.firebaseio.com"
})

export default instance