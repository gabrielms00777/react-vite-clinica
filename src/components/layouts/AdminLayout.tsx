import { Outlet, NavLink, Navigate } from "react-router";
import { useAuthStore } from "../../stores/useAuthStore";

export const AdminLayout = () => {
    const roles = ['admin']
    const user = useAuthStore((state) => state.user)

    if (!user) {
        return <Navigate to="/login" replace />
    }

    if (!roles.includes(user.role)) {
        // Mandar para rota de não autorizado
        return <Navigate to="/login" replace />
    }

    return (
        <div className="flex min-h-screen bg-gray-100">
            {/* Sidebar */}
            <aside className="w-64 text-white bg-blue-600">
                <div className="p-4 text-xl font-bold">Admin Dashboard</div>
                <nav className="p-4 space-y-2">
                    <NavLink to="/admin" className="block p-2 rounded hover:bg-blue-500">
                        Dashboard
                    </NavLink>
                    <NavLink to="/admin/users" className="block p-2 rounded hover:bg-blue-500">
                        Usuários
                    </NavLink>
                    <NavLink to="/admin/settings" className="block p-2 rounded hover:bg-blue-500">
                        Configurações
                    </NavLink>
                </nav>
            </aside>

            {/* Main Content */}
            <div className="flex-grow">
                <header className="p-4 bg-white shadow">
                    <h1 className="text-2xl font-bold">Administração</h1>
                </header>
                <main className="p-6">
                    <Outlet />
                </main>
            </div>
        </div>
    );
};
