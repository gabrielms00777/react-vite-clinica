import { useForm } from "react-hook-form";
import { AuthService } from "../../services/AuthService";
import { useNavigate } from "react-router";
import { LoginForm } from "../../types/auth";
import { useAuthStore } from "../../stores/useAuthStore";



export const Login = () => {
    const navigate = useNavigate()
    const setUser = useAuthStore((state) => state.setUser)
    const { register, handleSubmit, formState: { errors, isSubmitting }, setError } = useForm<LoginForm>({
        defaultValues: {
            email: 'admin@admin',
            password: 'admin'
        }
    })

    const onSubmit = async (formData: LoginForm) => {
        const response = await AuthService.login(formData)
        if (response.details) {
            setError('email', {
                message: (response.details as { errors: any }).errors.email[0]
            })
            return
        }
        setUser(response.data.data)
        return navigate(`/${response.data.data.role}`)
    };

    return (
        <div className="max-w-md p-6 mx-auto">
            <h1 className="mb-4 text-3xl font-bold">Login</h1>
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
                    {errors.email && <span className="mt-2 text-sm text-red-500">{errors.email.message}</span>}
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
                    disabled={isSubmitting}
                    className="w-full p-2 text-white bg-blue-500 rounded hover:bg-blue-600"
                >
                    {isSubmitting ? "Entrando..." : "Entrar"}
                </button>
            </form>
        </div>
    )
};
