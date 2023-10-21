import NavBar from "@/Components/NavBar";
import { Head, useForm, usePage } from "@inertiajs/react";

export default function EditFuncPosto() {
    const { data, setData, post, errors } = useForm({
        idFuncionario: usePage().props.funcionarioPosto.idFuncionario,
        idPosto: usePage().props.funcionarioPosto.idPosto,
        idFuncionario_has_posto: usePage().props.funcionarioPosto.idFuncionario_has_posto,
    });

    const submit = (e) => {
        e.preventDefault();
        post(route('UpFuncPosto'));
    };
    return (
        <>
            <Head title="Alocação posto" />
            <NavBar />
            <div className="flex justify-center">
                <form onSubmit={submit}>
                    <div className="mt-5 text-2xl">
                        <h1>Alocação do funcionario</h1>
                    </div>
                    <input type="hidden" name="idFuncionario_has_posto" value={data.idFuncionario_has_posto} />
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
                    <div className="flex flex-col space-y-1 mt-4" >
                        <label htmlFor="idPosto">Posto:</label>
                        <select name="idPosto" id="idPosto" value={data.idPosto} onChange={(e) => setData('idPosto', e.target.value)} required>
                            <option selected>Selecione um posto</option>
                            {usePage().props.postos.map((postoCadastro) => (
                                <option key={postoCadastro.idPosto} value={postoCadastro.idPosto} title={postoCadastro.horarioPosto
                                }>
                                    {postoCadastro.funcao} && {postoCadastro.local}
                                </option>
                            ))}
                        </select>
                        <span className="text-red-500 mt-2">{errors.idPosto}</span>
                    </div>
                    <button className="px-4 py-2 rounded-lg mt-4 bg-blue-600 text-white hover:bg-blue-400">Adicionar</button>
                </form>
            </div>
        </>
    )
}