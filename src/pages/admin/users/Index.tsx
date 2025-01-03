import { NavLink } from "react-router";
import { User } from "../../../types/User";

export const UsersIndex = () => {
    const users: User[] = [
        { id: 1, name: "João Silva", email: "joao.silva@example.com", role: "admin" },
        { id: 2, name: "Maria Oliveira", email: "maria.oliveira@example.com", role: "medico" },
        { id: 3, name: "Carlos Santos", email: "carlos.santos@example.com", role: "recepcionista" },
    ];
    return (
        <div>
            <div className="flex justify-between items-center">
                <h1 className="text-3xl font-bold mb-6">Usuários</h1>
                <NavLink to="/admin/users/create" className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600">
                    Adicionar Usuario
                </NavLink>
            </div>
            <table className="w-full border-collapse border border-gray-300">
                <thead>
                    <tr className="bg-gray-200">
                        <th className="border border-gray-300 p-2">ID</th>
                        <th className="border border-gray-300 p-2">Nome</th>
                        <th className="border border-gray-300 p-2">Email</th>
                        <th className="border border-gray-300 p-2">Role</th>
                        <th className="border border-gray-300 p-2">Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user: User) => (
                        <tr key={user.id} className="text-center">
                            <td className="border border-gray-300 p-2">{user.id}</td>
                            <td className="border border-gray-300 p-2">{user.name}</td>
                            <td className="border border-gray-300 p-2">{user.email}</td>
                            <td className="border border-gray-300 p-2">{user.role}</td>
                            <td className="border border-gray-300 p-2 space-x-2">
                                <button className="bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-600">
                                    Editar
                                </button>
                                <button className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600">
                                    Remover
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};
