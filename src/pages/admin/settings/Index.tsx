export const AdminSettings = () => {
    return (
        <div>
            <h1 className="text-3xl font-bold mb-6">Configurações</h1>
            <form className="space-y-4">
                <div>
                    <label htmlFor="clinicName" className="block text-sm font-medium">
                        Nome da Clínica
                    </label>
                    <input
                        type="text"
                        id="clinicName"
                        className="w-full p-2 border rounded"
                        placeholder="Digite o nome da clínica"
                    />
                </div>
                <div>
                    <label htmlFor="contactEmail" className="block text-sm font-medium">
                        E-mail de Contato
                    </label>
                    <input
                        type="email"
                        id="contactEmail"
                        className="w-full p-2 border rounded"
                        placeholder="Digite o e-mail de contato"
                    />
                </div>
                <button className="bg-blue-500 text-white px-4 py-2 rounded">
                    Salvar Alterações
                </button>
            </form>
        </div>
    );
};
