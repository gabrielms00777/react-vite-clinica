import { useForm } from "react-hook-form";
import { api } from "../../libs/axios";
import { AuthService } from "../../services/AuthService";
import { redirect, useNavigate } from "react-router";

type LoginForm = {
    email: string,
    password: string
}

export const Login = () => {
    let navigate = useNavigate();
    const { register, handleSubmit, formState: { errors }, setError } = useForm<LoginForm>({
        defaultValues: {
            email: 'admin@admin',
            password: 'admin'
        }
    })

    const onSubmit = async (formData: LoginForm) => {

        // const response = await api.post('/login', formData)
        const response = await AuthService.login(formData)
        if (response.details) {
            setError('email', {
                message: response.details?.errors?.email[0]
            })
            return
        }

        return navigate(`/${response.data.data.role}`)
        // console.log(`/${response.data.data.role}`)
        // console.log(response.data.data.role)


        if (response.data?.data?.role === 'admin') {
            return redirect('/admin')
        }
        // } else if
        //     console.log(response);


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
                    {errors.email && <span className="text-sm mt-2 text-red-500">{errors.email.message}</span>}
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
