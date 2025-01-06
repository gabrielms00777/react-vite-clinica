import { NavLink } from "react-router";
import { User } from "../../../types/User";
import { useEffect, useState } from "react";
import { AdminService } from "../../../services/AdminService";

export const UsersIndex = () => {
    const [users, setUsers] = useState<User[]>([]);

    useEffect(() => {
        const fetchUsers = async () => {
            const response = await AdminService.users()
            setUsers(response.data.data)
        }

        fetchUsers()
    }, [])


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
                    {!users && <tr><td colSpan={5}>Carregando...</td></tr>}

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
