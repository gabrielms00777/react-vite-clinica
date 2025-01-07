import { AxiosError } from "axios"
import { useApi } from "../hooks/useApi"
import { SettingsForm } from "../pages/admin/settings/Index"

export const AdminService = {
    async getUsers() {
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
    async getSettings() {
        try {
            const response = await useApi("/api/clinic")
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
    async updateSettings(formData: SettingsForm) {
        try {
            const response = await useApi("/api/clinic", 'POST', formData)
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