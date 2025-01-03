export const Services = () => {
    const services = [
        { id: 1, name: "Consulta Médica", description: "Atendimento personalizado com nossos especialistas." },
        { id: 2, name: "Exames Laboratoriais", description: "Exames completos e confiáveis." },
        { id: 3, name: "Vacinação", description: "Vacinas para todas as idades." },
    ];

    return (
        <div className="p-6">
            <h1 className="text-3xl font-bold">Nossos Serviços</h1>
            <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {services.map((service) => (
                    <div key={service.id} className="p-4 border rounded shadow">
                        <h2 className="text-xl font-semibold">{service.name}</h2>
                        <p className="mt-2 text-gray-600">{service.description}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}
