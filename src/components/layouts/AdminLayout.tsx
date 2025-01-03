import { Outlet, NavLink } from "react-router";

export const AdminLayout = () => {
    return (
        <div className="flex min-h-screen bg-gray-100">
            {/* Sidebar */}
            <aside className="w-64 bg-blue-600 text-white">
                <div className="p-4 text-xl font-bold">Admin Dashboard</div>
                <nav className="space-y-2 p-4">
                    <NavLink to="/admin" className="block hover:bg-blue-500 p-2 rounded">
                        Dashboard
                    </NavLink>
                    <NavLink to="/admin/users" className="block hover:bg-blue-500 p-2 rounded">
                        Usuários
                    </NavLink>
                    <NavLink to="/admin/settings" className="block hover:bg-blue-500 p-2 rounded">
                        Configurações
                    </NavLink>
                </nav>
            </aside>

            {/* Main Content */}
            <div className="flex-grow">
                <header className="bg-white p-4 shadow">
                    <h1 className="text-2xl font-bold">Administração</h1>
                </header>
                <main className="p-6">
                    <Outlet />
                </main>
            </div>
        </div>
    );
};
