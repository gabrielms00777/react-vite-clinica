import { NavLink } from "react-router";
import { User } from "../../../types/User";
import { useEffect, useState } from "react";
import { AdminService } from "../../../services/AdminService";

export const UsersIndex = () => {
    const [users, setUsers] = useState<User[]>([]);

    useEffect(() => {
        const fetchUsers = async () => {
            const response = await AdminService.getUsers()
            setUsers(response.data.data)
        }

        fetchUsers()
    }, [])


    return (
        <div>
            <div className="flex items-center justify-between">
                <h1 className="mb-6 text-3xl font-bold">Usuários</h1>
                <NavLink to="/admin/users/create" className="p-2 text-white bg-blue-500 rounded hover:bg-blue-600">
                    Adicionar Usuario
                </NavLink>
            </div>
            <table className="w-full border border-collapse border-gray-300">
                <thead>
                    <tr className="bg-gray-200">
                        <th className="p-2 border border-gray-300">ID</th>
                        <th className="p-2 border border-gray-300">Nome</th>
                        <th className="p-2 border border-gray-300">Email</th>
                        <th className="p-2 border border-gray-300">Role</th>
                        <th className="p-2 border border-gray-300">Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {!users && <tr><td colSpan={5}>Carregando...</td></tr>}

                    {users.map((user: User) => (
                        <tr key={user.id} className="text-center">
                            <td className="p-2 border border-gray-300">{user.id}</td>
                            <td className="p-2 border border-gray-300">{user.name}</td>
                            <td className="p-2 border border-gray-300">{user.email}</td>
                            <td className="p-2 border border-gray-300">{user.role}</td>
                            <td className="p-2 space-x-2 border border-gray-300">
                                <button className="px-2 py-1 text-white bg-blue-500 rounded hover:bg-blue-600">
                                    Editar
                                </button>
                                <button className="px-2 py-1 text-white bg-red-500 rounded hover:bg-red-600">
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
