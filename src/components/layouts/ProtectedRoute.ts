

import React from "react";
import { Outlet, useNavigate } from "react-router";
import { useAuthStore } from "../../stores/useAuthStore";

interface ProtectedRouteProps {
    roles: string[]
}

export const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ roles }) => {
    const navigate = useNavigate()
    const user = useAuthStore((state) => state.user)

    if (!user) {
        return navigate('/login', { replace: true })
    }

    if (!roles.includes(user.role)) {
        // Mandar para rota de não autorizado
        return navigate('/login', { replace: true })
    }

    return <Outlet />
}