import NavBar from "@/Components/NavBar";
import { Head, useForm, usePage } from "@inertiajs/react";

export default function CadastroPosto() {
    const { data, setData, post, errors } = useForm({
        idPosto: usePage().props.posto.idPosto,
        local: usePage().props.posto.local,
        funcao: usePage().props.posto.funcao,
        horarioPosto: usePage().props.posto.horarioPosto
    });
    const submit = (e) => {
        e.preventDefault();
        post(route('updatePosto'));
    };

    return (
        <>
            <Head title="Editar posto" />
            <NavBar />
            <div className="flex justify-center">
                <form onSubmit={submit}>
                    <div className="mt-5 text-2xl">
                        <h1>Editar do posto</h1>
                    </div>
                    <input type="hidden" name="idPosto" value={data.idPosto} onChange={(e) => setData('idPosto', e.target.value)} />
                    <div className="flex flex-col space-y-1 mt-4">
                        <label htmlFor="local" className="">Local:</label>
                        <input
                            type="text"
                            name="local"
                            id="local"
                            className="border rounded-md w-96"
                            placeholder="Local"
                            value={data.local}
                            onChange={(e) => setData('local', e.target.value)}
                            required />
                        <span className="text-red-500 mt-2">{errors.local}</span>
                    </div>
                    <div className="flex flex-col space-y-1 mt-4">
                        <label htmlFor="cpf">Funcao:</label>
                        <input
                            type="text"
                            name="funcao"
                            id="funcao"
                            className="border rounded-md w-96"
                            placeholder="Carpinteiro"
                            value={data.funcao}
                            onChange={(e) => setData('funcao', e.target.value)}
                            required />
                        <span className="text-red-500 mt-2">{errors.funcao}</span>
                    </div>
                    <div className="flex flex-col space-y-1 mt-4">
                        <label htmlFor="dataNasc">Horario do posto::</label>
                        <input
                            type="text"
                            name="horarioPosto"
                            id="horarioPosto"
                            className="border rounded-md w-96"
                            placeholder="08 às 18 horas"
                            value={data.horarioPosto}
                            onChange={(e) => setData('horarioPosto', e.target.value)}
                            required />
                        <span className="text-red-500 mt-2">{errors.horarioPosto}</span>
                    </div>

                    <button className="px-4 py-2 rounded-lg mt-4 bg-blue-600 text-white hover:bg-blue-400">Alterar</button>
                </form>
            </div></>
    );
}
