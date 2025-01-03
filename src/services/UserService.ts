import { api } from "../libs/axios"

export const UserService = {
    async fetchUserProfile() {
        try {
            const response = await api.get("/api/profile")
            return response.data
        } catch (error) {
            throw new Error(
                error.response?.data?.message || "Erro ao buscar o perfil do usuário"
            );
        }
    }
}