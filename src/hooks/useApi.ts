import axios from "axios"
import { api } from "../libs/axios"


export const useBaseApi = async (path:string,method:string = 'GET', data?:any) => {
    const token = document.cookie.split("; ").find(row => row.startsWith("XSRF-TOKEN="))?.split('=')[1]

    const headers: any = {
        'Accept': 'application/json',
    }

    if(token){
        headers['X-XSRF-TOKEN'] = decodeURIComponent(token)
    }

    
    return await axios('http://localhost:8000'+path,{
        withCredentials: true,
        withXSRFToken: true,
        headers,
        method,
        params : method === 'GET' && data,
        data: method !== 'GET' && data
    })
}

export const useApi = async (path: string, method: string = 'GET', data?: any) => {
    const token = document.cookie.split("; ").find(row => row.startsWith("XSRF-TOKEN="))?.split('=')[1]
    if (!token) {
        await api.get('/sanctum/csrf-cookie')
        // await useBaseApi('/sanctum/csrf-cookie')
    }

    return await useBaseApi(path, method, data)
}