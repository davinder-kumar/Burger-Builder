import { useState } from 'react'
export const useHttp = (axios) => {
    const [error,SetError] = useState(null)
    axios.interceptors.request.use(() =>{

    })
}
