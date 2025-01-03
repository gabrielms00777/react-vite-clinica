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

    if(!token){
        try {
            await api.get("/sanctum/csrf-cookie");
            console.log("XSRF-TOKEN obtido com sucesso.");
        } catch (error) {
            console.error("Erro ao obter o XSRF-TOKEN:", error);
            throw error; 
        }
    }

    return config
}, (error) => {
    return Promise.reject(error);
})