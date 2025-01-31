import { create } from "zustand";
import { User } from "../types/User";


type UserStore = {
    user: User | null
    setUser: (user: User) => void
    clearUser: () => void
}

export const useAuthStore = create<UserStore>((set) => ({
    user: null,
    setUser: (user: User) => set({ user }),
    clearUser: () => set({ user: null })
}))