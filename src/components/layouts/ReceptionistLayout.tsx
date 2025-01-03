import { Outlet, NavLink } from "react-router";

export const ReceptionistLayout = () => {
    return (
        <div className="flex min-h-screen bg-gray-100">
            {/* Sidebar */}
            <aside className="w-64 bg-purple-600 text-white">
                <div className="p-4 text-xl font-bold">Painel da Recepção</div>
                <nav className="space-y-2 p-4">
                    <NavLink to="/reception" className="block hover:bg-purple-500 p-2 rounded">
                        Dashboard
                    </NavLink>
                    <NavLink to="/reception/appointments" className="block hover:bg-purple-500 p-2 rounded">
                        Agendamentos
                    </NavLink>
                </nav>
            </aside>

            {/* Main Content */}
            <div className="flex-grow">
                <header className="bg-white p-4 shadow">
                    <h1 className="text-2xl font-bold">Recepção</h1>
                </header>
                <main className="p-6">
                    <Outlet />
                </main>
            </div>
        </div>
    );
};
