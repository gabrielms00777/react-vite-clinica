export const Profile = () => {
    // Dados fictícios do usuário
    const user = {
        name: "João Silva",
        email: "joao.silva@example.com",
        phone: "(11) 91234-5678",
        role: "Recepcionista",
    };

    return (
        <div>
            <h1 className="text-3xl font-bold mb-6">Perfil</h1>
            <div className="bg-white shadow-md rounded p-6">
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">Nome</label>
                    <p className="text-lg">{user.name}</p>
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">E-mail</label>
                    <p className="text-lg">{user.email}</p>
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">Telefone</label>
                    <p className="text-lg">{user.phone}</p>
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">Função</label>
                    <p className="text-lg">{user.role}</p>
                </div>
            </div>
        </div>
    );
};
