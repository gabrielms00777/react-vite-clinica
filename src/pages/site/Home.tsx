import { useEffect } from "react"
import { api } from "../../libs/axios"

export const Home = () => {
    useEffect(() => {
        const teste = async () => {
            const response = await api.get('/')
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
