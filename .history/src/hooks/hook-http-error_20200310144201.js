import { useState } from 'react'
export const useHttp = (axios) => {
    
    const [error, SetError] = useState(null)
    useEffect(()=>{
        console.log("RENDERED HOOK", error)
    })
    axios.interceptors.request.use((req) => {
        SetError(null)
        return req
    })

    axios.interceptors.response.use(req => req, error => {
        SetError(error)
        return Promise.reject(error)
    })

    const CloseErrorHandler = () => {
        SetError(null)
    }
    return [error, CloseErrorHandler]
}
