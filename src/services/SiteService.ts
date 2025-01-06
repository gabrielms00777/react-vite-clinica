import { AxiosError } from "axios"
import { useApi } from "../hooks/useApi"

export const SiteService = {
    async home() {
        try {
            const response = await useApi('/')
            return {
                data: response.data,
                details: null
            }
            
        } catch (error: unknown) {
            const axiosError = error as AxiosError
            return {
                data: null,
                details: axiosError.response?.data
            }
        }
    }
}