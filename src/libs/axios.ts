import axios from 'axios'

export const api = axios.create({
    // baseURL: 'http://api-react-vite.test',
    baseURL: 'http://localhost:8000',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        "Access-Control-Allow-Origin":  "*"
    },
    withCredentials: true,
    withXSRFToken: true,
})

api.interceptors.request.use(async (config) => {
    const token = document.cookie.split("; ").find(row => row.startsWith("XSRF-TOKEN="));

    if(token){
        config.headers['X-CSRF-TOKEN'] = token
    }

    return config
}, (error) => {
    return Promise.reject(error);
})