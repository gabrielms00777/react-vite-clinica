import { Link } from "react-router";

export const NotFound = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <h1 className="text-6xl font-bold text-purple-600 mb-4">404</h1>
            <p className="text-2xl font-semibold mb-6">Página não encontrada</p>
            <Link to="/" className="px-6 py-2 bg-purple-600 text-white rounded hover:bg-purple-700">
                Voltar para o Início
            </Link>
        </div>
    );
};
