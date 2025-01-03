export const Contact = () => {
    const contactInfo = {
        address: "Rua da Saúde, 123, Centro - São Paulo",
        phone: "(11) 1234-5678",
        email: "contato@clinicamedica.com",
    };
    return (
        <div className="p-6">
            <h1 className="text-3xl font-bold">Contato</h1>
            <div className="mt-4 text-gray-700">
                <p><strong>Endereço:</strong> {contactInfo.address}</p>
                <p><strong>Telefone:</strong> {contactInfo.phone}</p>
                <p><strong>Email:</strong> {contactInfo.email}</p>
            </div>
        </div>
    )
};
