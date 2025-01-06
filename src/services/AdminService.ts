import { AxiosError } from "axios"
import { useApi } from "../hooks/useApi"

export const AdminService = {
    async users() {
        try {
            const response = await useApi("/api/users")
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
    },
}