import { Outlet, NavLink } from "react-router";

export const DoctorLayout = () => {
    return (
        <div className="flex min-h-screen bg-gray-100">
            {/* Sidebar */}
            <aside className="w-64 bg-green-600 text-white">
                <div className="p-4 text-xl font-bold">Painel Médico</div>
                <nav className="space-y-2 p-4">
                    <NavLink to="/doctor" className="block hover:bg-green-500 p-2 rounded">
                        Dashboard
                    </NavLink>
                    <NavLink to="/doctor/patients" className="block hover:bg-green-500 p-2 rounded">
                        Pacientes
                    </NavLink>
                    <NavLink to="/doctor/schedule" className="block hover:bg-green-500 p-2 rounded">
                        Agenda
                    </NavLink>
                </nav>
            </aside>

            {/* Main Content */}
            <div className="flex-grow">
                <header className="bg-white p-4 shadow">
                    <h1 className="text-2xl font-bold">Área do Médico</h1>
                </header>
                <main className="p-6">
                    <Outlet />
                </main>
            </div>
        </div>
    );
};
