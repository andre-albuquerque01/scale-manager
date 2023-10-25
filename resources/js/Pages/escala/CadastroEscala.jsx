import NavBar from "@/Components/NavBar";
import { Head, useForm, usePage } from "@inertiajs/react";

export default function CadastroEscala() {
    const { posto } = usePage().props;
    const { data, setData, post, errors } = useForm({
        horarioPosto: '',
        data: '',
        idPosto: ''
    });
    const submit = (e) => {
        e.preventDefault();
        post(route('EscalaCadastro'));
    };

    return (
        <>
            <Head title="Cadastro escala" />
            <NavBar />
            <div className="flex justify-center">
                <form onSubmit={submit}>
                    <div className="mt-5 text-2xl">
                        <h1>Cadastro da Escala</h1>
                    </div>
                    <div className="flex flex-col space-y-1 mt-4">
                        <label htmlFor="horarioPosto">Horario do posto:</label>
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
                    <div className="flex flex-col space-y-1 mt-4">
                        <label htmlFor="data" className="">Data:</label>
                        <input
                            type="date"
                            name="data"
                            id="data"
                            className="border rounded-md w-96"
                            placeholder="data"
                            value={data.data}
                            onChange={(e) => setData('data', e.target.value)}
                            required />
                        <span className="text-red-500 mt-2">{errors.data}</span>
                    </div>
                    <div className="flex flex-col space-y-1 mt-4">
                        <label htmlFor="cpf">Posto:</label>
                        <select name="idPosto" id="idPosto" value={data.idPosto} onChange={(e) => setData('idPosto', e.target.value)} required>
                            <option name="" id="" selected>Selecione um posto</option>
                            {posto.map((postoCadastro) => (
                                <option key={postoCadastro.idPosto} value={postoCadastro.idPosto} title={postoCadastro.horarioPosto
                                }>
                                    {postoCadastro.funcao} && {postoCadastro.local}
                                </option>
                            ))}
                        </select>
                        <span className="text-red-500 mt-2">{errors.idPosto}</span>
                    </div>

                    <button className="px-4 py-2 rounded-lg mt-4 bg-blue-600 text-white hover:bg-blue-400">Cadastrar</button>
                </form>
            </div>
        </>
    );
}
