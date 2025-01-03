import { useForm } from "react-hook-form";
import { api } from "../../libs/axios";

type LoginForm = {
    email: string,
    password: string
}

export const Login = () => {
    const { register, handleSubmit, formState } = useForm<LoginForm>({
        defaultValues: {
            email: 'admin@admin',
            password: 'admin'
        }
    })

    // const { errors } = formState

    // console.log(errors)

    const onSubmit = async (formData: LoginForm) => {
        await api.get('/sanctum/csrf-cookie')
        const response = await api.post('/login', formData)
        // console.log(response.data);

    };

    return (
        <div className="p-6 max-w-md mx-auto">
            <h1 className="text-3xl font-bold mb-4">Login</h1>
            <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label className="block text-gray-700">Email</label>
                    <input
                        type="email"
                        className="w-full p-2 border rounded"
                        placeholder="Digite seu email"
                        {...register("email", {
                            required: {
                                value: true,
                                message: "Email is required",
                            },
                        })}
                    />
                </div>
                <div>
                    <label className="block text-gray-700">Senha</label>
                    <input
                        type="password"
                        className="w-full p-2 border rounded"
                        placeholder="Digite sua senha"
                        {...register("password", {
                            required: {
                                value: true,
                                message: "Password is required",
                            },
                        })}
                    />
                </div>
                <button
                    type="submit"
                    className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
                >
                    Entrar
                </button>
            </form>
        </div>
    )
};
