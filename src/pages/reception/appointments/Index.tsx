// Tipos dos dados
type Appointment = {
    id: number;
    patientName: string;
    date: string;
    time: string;
    doctorName: string;
};

export const Appointments = () => {
    // Dados fictícios
    const appointments: Appointment[] = [
        { id: 1, patientName: "João Silva", date: "2025-01-10", time: "09:00", doctorName: "Dr. Pedro" },
        { id: 2, patientName: "Maria Santos", date: "2025-01-10", time: "10:30", doctorName: "Dra. Ana" },
    ];

    return (
        <div>
            <h1 className="text-3xl font-bold mb-6">Agendamentos</h1>
            <div className="bg-white shadow-md rounded">
                <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                        <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Paciente</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Data</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Horário</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Médico</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {appointments.map((appointment) => (
                            <tr key={appointment.id}>
                                <td className="px-6 py-4">{appointment.patientName}</td>
                                <td className="px-6 py-4">{appointment.date}</td>
                                <td className="px-6 py-4">{appointment.time}</td>
                                <td className="px-6 py-4">{appointment.doctorName}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};
