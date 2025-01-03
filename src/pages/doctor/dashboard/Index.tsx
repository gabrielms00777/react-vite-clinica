export const DoctorDashboard = () => {
    return (
        <div>
            <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
            <div className="grid grid-cols-3 gap-4">
                <div className="bg-white shadow-md p-4 rounded">
                    <h2 className="text-xl font-bold">Pacientes Ativos</h2>
                    <p className="text-3xl font-semibold">25</p>
                </div>
                <div className="bg-white shadow-md p-4 rounded">
                    <h2 className="text-xl font-bold">Consultas Hoje</h2>
                    <p className="text-3xl font-semibold">5</p>
                </div>
                <div className="bg-white shadow-md p-4 rounded">
                    <h2 className="text-xl font-bold">Consultas Semanais</h2>
                    <p className="text-3xl font-semibold">12</p>
                </div>
            </div>
        </div>
    );
};
