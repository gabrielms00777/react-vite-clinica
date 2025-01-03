type Notification = {
    id: number;
    message: string;
    date: string;
    read: boolean;
};

export const Notifications = () => {
    // Dados fictícios de notificações
    const notifications: Notification[] = [
        { id: 1, message: "Consulta agendada com sucesso.", date: "2025-01-02", read: false },
        { id: 2, message: "Paciente João Silva foi atendido.", date: "2025-01-01", read: true },
    ];

    return (
        <div>
            <h1 className="text-3xl font-bold mb-6">Notificações</h1>
            <div className="bg-white shadow-md rounded">
                <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                        <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Mensagem</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Data</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {notifications.map((notification) => (
                            <tr key={notification.id}>
                                <td className="px-6 py-4">{notification.message}</td>
                                <td className="px-6 py-4">{notification.date}</td>
                                <td className="px-6 py-4">
                                    {notification.read ? (
                                        <span className="text-green-600 font-semibold">Lido</span>
                                    ) : (
                                        <span className="text-red-600 font-semibold">Não Lido</span>
                                    )}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};
