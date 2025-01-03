export const ReceptionistDashboard = () => {
    return (
        <div>
            <h1 className="text-3xl font-bold mb-6">Dashboard da Recepção</h1>
            <div className="grid grid-cols-2 gap-4">
                <div className="bg-white shadow-md p-4 rounded">
                    <h2 className="text-xl font-bold">Agendamentos do Dia</h2>
                    <p className="text-3xl font-semibold">8</p>
                </div>
                <div className="bg-white shadow-md p-4 rounded">
                    <h2 className="text-xl font-bold">Pacientes Atendidos</h2>
                    <p className="text-3xl font-semibold">5</p>
                </div>
            </div>
        </div>
    );
};
