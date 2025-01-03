import { NavLink } from "react-router";

export const UsersCreate = () => {
    return (
        <div>
            <div className="flex justify-between items-center">
                <h1 className="text-3xl font-bold mb-6">Novo Usuário</h1>
                <NavLink to="/admin/users" className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600">
                    Voltar
                </NavLink>
            </div>
            <form className="space-y-4">
                <div>
                    <label htmlFor="name" className="block text-sm font-medium">
                        Nome
                    </label>
                    <input
                        type="text"
                        id="name"
                        className="w-full p-2 border rounded"
                        placeholder="Digite o nome"
                    />
                </div>
                <div>
                    <label htmlFor="email" className="block text-sm font-medium">
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        className="w-full p-2 border rounded"
                        placeholder="Digite o e-mail"
                    />
                </div>
                <div>
                    <label htmlFor="role" className="block text-sm font-medium">
                        Role
                    </label>
                    <select id="role" className="w-full p-2 border rounded">
                        <option value="admin">Admin</option>
                        <option value="medico">Médico</option>
                        <option value="recepcionista">Recepcionista</option>
                    </select>
                </div>
                <button className="bg-blue-500 text-white px-4 py-2 rounded">
                    Criar
                </button>
            </form>
        </div>
    );
};
