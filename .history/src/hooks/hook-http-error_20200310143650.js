import { useState } from 'react'
export const useHttp = (axios) => {
    const [error,SetError] = useState(null)
    axios.interceptors.request.use((req) =>{
        return req
    })
    
    axios.interceptors.response.use(req => req, error=>{
        SetError(error)
        return Promise.reject(error)
    })
}
