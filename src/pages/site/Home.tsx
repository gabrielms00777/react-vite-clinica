import { useEffect } from "react"
import { SiteService } from "../../services/SiteService";

export const Home = () => {
    useEffect(() => {
        const teste = async () => {
            const response = await SiteService.home()
            console.log(response)
        }

        teste()
    }, [])
    return (
        <div className="p-6">
            <h1 className="text-3xl font-bold">Bem-vindo à Clínica Médica</h1>
            <p className="mt-4 text-gray-700">
                Oferecemos atendimento especializado e serviços de alta qualidade para cuidar da sua saúde.
            </p>
        </div>
    )
};
