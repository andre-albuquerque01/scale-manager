import NavBar from "@/Components/NavBar";
import { Head, useForm, usePage } from "@inertiajs/react";
export default function CadastroAfastamento() {
    const { data, setData, post, errors } = useForm({
        periodo: usePage().props.afastamentos.periodo,
        motivo: usePage().props.afastamentos.motivo,
        idFuncionario: usePage().props.afastamentos.idFuncionario,
        idAfastamento: usePage().props.afastamentos.idAfastamento,
    });
    const submit = (e) => {
        e.preventDefault();
        post(route('UpAfastamento'));
    }
    return (
        <>
            <Head title="Afastamento" />
            <NavBar />
            <div className="flex justify-center">
                <form onSubmit={submit}>
                    <div className="mt-5 text-2xl">
                        <h1>Cadastro da afastamento</h1>
                    </div>
                    <input type="hidden" name="idAfastamento" value={data.idAfastamento} />
                    <div className="flex flex-col space-y-1 mt-4">
                        <label htmlFor="periodo">Periodo de afastamento:</label>
                        <input
                            type="text"
                            name="periodo"
                            id="periodo"
                            className="border rounded-md w-96"
                            placeholder="5 dias"
                            value={data.periodo}
                            onChange={(e) => setData('periodo', e.target.value)}
                            required />
                        <span className="text-red-500 mt-2">{errors.periodo}</span>
                    </div>
                    <div className="flex flex-col space-y-1 mt-4">
                        <label htmlFor="motivo" className="">Motivo:</label>
                        <input
                            type="text"
                            name="motivo"
                            id="motivo"
                            className="border rounded-md w-96"
                            placeholder="motivo"
                            value={data.motivo}
                            onChange={(e) => setData('motivo', e.target.value)}
                            required />
                        <span className="text-red-500 mt-2">{errors.motivo}</span>
                    </div>
                    <div className="flex flex-col space-y-1 mt-4">
                        <label htmlFor="idFuncionario">Funcionario:</label>
                        <select
                            name="idFuncionario"
                            id="idFuncionario"
                            value={data.idFuncionario}
                            onChange={(e) => setData('idFuncionario', e.target.value)} required>
                            <option selected>Selecione um funcionario</option>
                            {usePage().props.funcionarios.map((funcionario) => (
                                <option key={funcionario.idFuncionario} value={funcionario.idFuncionario}>
                                    {funcionario.nomeCompleto}
                                </option>
                            ))}
                        </select>
                        <span className="text-red-500 mt-2">{errors.idFuncionario}</span>
                    </div>

                    <button className="px-4 py-2 rounded-lg mt-4 bg-blue-600 text-white hover:bg-blue-400">Cadastrar</button>
                </form>
            </div>
        </>
    );
}