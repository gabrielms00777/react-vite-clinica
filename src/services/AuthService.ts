import { AxiosError } from "axios";
import { useApi } from "../hooks/useApi";

export const AuthService = {
    async login(formData: { email: string; password: string }) {
        try {
            const response = await useApi("/login", 'POST', formData)

            const user = await this.me()
            return {
                data: user.data,
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
    async me() {
        try {
            const response = await useApi("/api/user")
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
    async checkRole(role: string) {
        try {
            await useApi('/api/check-role/' + role)
            return true
        } catch (error) {
            return false
        }
    }

}