import { SiteService } from "../../services/SiteService";
import { useQuery } from "@tanstack/react-query";

const getContactInfos = async () => {
    const response = await SiteService.contactInfos()
    return response
}


export const Contact = () => {

    const { data: contactInfo, isPending } = useQuery({
        queryKey: ['contactInfos'],
        queryFn: getContactInfos,
    })

    return (
        <div className="p-6">
            <h1 className="text-3xl font-bold">Contato - {isPending ? 'Carregando...' : contactInfo?.data.name} </h1>
            <div className="mt-4 text-gray-700">
                <p><strong>Endereço:</strong> {isPending ? 'Carregando...' : contactInfo?.data.address}</p>
                <p><strong>Telefone:</strong> {isPending ? 'Carregando...' : contactInfo?.data.phone}</p>
                <p><strong>Email:</strong> {isPending ? 'Carregando...' : contactInfo?.data.email}</p>
                <p><strong>Funcionamento:</strong> {isPending ? 'Carregando...' : contactInfo?.data.working_hours}</p>
            </div>
        </div>
    )
};
