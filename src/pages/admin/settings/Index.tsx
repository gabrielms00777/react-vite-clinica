import { useForm } from "react-hook-form";
import { AdminService } from "../../../services/AdminService";
import { useEffect } from "react";

export interface SettingsForm {
    name: string;
    email: string;
    phone: string;
    address: string;
    working_hours: string;
}

export const AdminSettings = () => {
    useEffect(() => {
        const getSettings = async () => {
            const response = await AdminService.getSettings()
            reset({
                name: response.data.name,
                email: response.data.email,
                phone: response.data.phone,
                address: response.data.address,
                working_hours: response.data.working_hours,
            });
        }

        getSettings()
    }, [])

    const { register, handleSubmit, formState: { errors, isSubmitting }, setError, reset } = useForm<SettingsForm>({
        defaultValues: {
            name: 'Carregando...',
            email: 'Carregando...',
            phone: 'Carregando...',
            address: 'Carregando...',
            working_hours: 'Carregando...',
        }
    })

    const onSubmit = async (formData: SettingsForm) => {
        const response = await AdminService.updateSettings(formData)
        if (response.details) {
            setError('name', {
                message: (response.details as { errors: any }).errors.name[0]
            })
            return
        }
        alert('Dados Atualizados com sucesso!')
    }

    return (
        <div>
            <h1 className="mb-6 text-3xl font-bold">Configurações da Clínica</h1>
            <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
                {/* Nome da Clínica */}
                <div>
                    <label htmlFor="clinicName" className="block text-sm font-medium">
                        Nome da Clínica
                    </label>
                    <input
                        {...register('name', { required: 'Name is required' })}
                        type="text"
                        id="clinicName"
                        className="w-full p-2 border rounded"
                        placeholder="Digite o nome da clínica"
                    />
                    {errors.name && <span className="mt-2 text-sm text-red-500">{errors.name.message}</span>}
                </div>

                {/* E-mail de Contato */}
                <div>
                    <label htmlFor="contactEmail" className="block text-sm font-medium">
                        E-mail de Contato
                    </label>
                    <input
                        {...register('email', { required: 'Email is required', pattern: { value: /^\S+@\S+$/i, message: 'Invalid email address' } })}
                        type="email"
                        id="contactEmail"
                        className="w-full p-2 border rounded"
                        placeholder="Digite o e-mail de contato"
                    />
                    {errors.email && <span className="mt-2 text-sm text-red-500">{errors.email.message}</span>}
                </div>

                {/* Endereço */}
                <div>
                    <label htmlFor="address" className="block text-sm font-medium">
                        Endereço
                    </label>
                    <input
                        {...register('address', { required: 'Address is required' })}
                        type="text"
                        id="address"
                        className="w-full p-2 border rounded"
                        placeholder="Digite o endereço da clínica"
                    />
                    {errors.address && <span className="mt-2 text-sm text-red-500">{errors.address.message}</span>}
                </div>

                {/* Telefone para Contato */}
                <div>
                    <label htmlFor="phone" className="block text-sm font-medium">
                        Telefone para Contato
                    </label>
                    <input
                        {...register('phone', { required: 'Phone is required' })}
                        type="tel"
                        id="phone"
                        className="w-full p-2 border rounded"
                        placeholder="Digite o telefone para contato"
                    />
                    {errors.phone && <span className="mt-2 text-sm text-red-500">{errors.phone.message}</span>}
                </div>

                {/* Horários de Funcionamento */}
                <div>
                    <label htmlFor="hours" className="block text-sm font-medium">
                        Horários de Funcionamento
                    </label>
                    <textarea
                        {...register('working_hours', { required: 'Working Hours are required' })}
                        id="hours"
                        rows={3}
                        className="w-full p-2 border rounded"
                        placeholder="Ex: Seg-Sex: 8h às 18h, Sáb: 8h às 12h"
                    ></textarea>
                    {errors.working_hours && <span className="mt-2 text-sm text-red-500">{errors.working_hours.message}</span>}
                </div>

                {/* Botão de Salvar */}
                <button type="submit" disabled={isSubmitting} className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600">
                    Salvar Alterações
                    {isSubmitting ? "Salvando..." : "Salvar Alterações"}
                </button>
            </form>
        </div>
    );
};
