export const PatientIndex = () => {
    return (
        <div>
            <h1 className="text-3xl font-bold mb-6">Lista de Pacientes</h1>
            <div className="bg-white shadow-md rounded">
                <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                        <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Nome</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Idade</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Última Consulta</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        <tr>
                            <td className="px-6 py-4">João Silva</td>
                            <td className="px-6 py-4">32</td>
                            <td className="px-6 py-4">15/12/2024</td>
                        </tr>
                        <tr>
                            <td className="px-6 py-4">Maria Santos</td>
                            <td className="px-6 py-4">27</td>
                            <td className="px-6 py-4">20/12/2024</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};
