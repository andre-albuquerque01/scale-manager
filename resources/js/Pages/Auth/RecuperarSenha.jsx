import GuestLayout from '@/Layouts/GuestLayout';
import { Head, useForm } from '@inertiajs/react';
import { useEffect } from 'react';

export default function Login() {
    const { data, setData, post, errors } = useForm({
        email: '',
    });

    const submit = (e) => {
        e.preventDefault();
        post(route('recuperaEmail'));
    };


    return (
        <GuestLayout>
            <Head title="Enviar e-mail" />
            <h1 className="text-xl py-3">Problemas para entrar?</h1>
            <p className="text-sm text-justify py-3">Insira o seu email e enviaremos um link com instruções para você voltar a acessar a sua conta.</p>
            <form onSubmit={submit}>
                <div>
                    <label htmlFor="email" value="Email">Email</label>
                    <input
                        id="email"
                        type="email"
                        name="email"
                        value={data.email}
                        className="mt-1 block w-full"
                        autoComplete="username"
                        isFocused={true}
                        onChange={(e) => setData('email', e.target.value)}
                        required
                    />
                    <span className="text-red-500 mt-2">{errors.email}</span>
                </div>
                <div className="flex items-center justify-end mt-4">
                    <button className="ml-4 px-4 py-2 bg-blue-600 rounded-md text-white hover:bg-blue-400">
                        Enviar
                    </button>
                </div>
            </form>
            <hr className="border-gray-600 mt-7 mr-20 ml-20" />
            <div className="mt-5 text-center">
                <a href="entrar" className="text-gray-400 hover:underline">Cancelar</a>
            </div>
        </GuestLayout>
    );
}
