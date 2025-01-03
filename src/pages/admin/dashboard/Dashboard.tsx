export const AdminDashboard = () => {
    return (
        <div>
            <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
            <div className="grid grid-cols-3 gap-6">
                <div className="bg-blue-500 text-white p-4 rounded shadow">
                    <h2 className="text-xl font-bold">Usuários</h2>
                    <p className="text-2xl">150</p>
                </div>
                <div className="bg-green-500 text-white p-4 rounded shadow">
                    <h2 className="text-xl font-bold">Consultas</h2>
                    <p className="text-2xl">75</p>
                </div>
                <div className="bg-yellow-500 text-white p-4 rounded shadow">
                    <h2 className="text-xl font-bold">Médicos</h2>
                    <p className="text-2xl">10</p>
                </div>
            </div>
        </div>
    );
};
