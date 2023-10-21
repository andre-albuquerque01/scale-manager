import NavBar from "@/Components/NavBar";
import { Head, useForm, usePage } from "@inertiajs/react";

export default function EditFuncEscala() {
    const { data, setData, post, errors } = useForm({
        idFuncionario: usePage().props.funcionarioEscala.idFuncionario,
        idEscala: usePage().props.funcionarioEscala.idEscala,
        idFuncionario_has_escala: usePage().props.funcionarioEscala.idFuncionario_has_escala,
    });
    
    const submit = (e) => {
        e.preventDefault();
        post(route('UpFuncEscala'));
    };
    return (
        <>
            <Head title="Alocação escala" />
            <NavBar />
            <div className="flex justify-center">
                <form onSubmit={submit}>
                    <div className="mt-5 text-2xl">
                        <h1>Alocação do funcinario</h1>
                    </div>
                    <input type="hidden" name="idFuncionario_has_escala" value={data.idFuncionario_has_escala} />
                    <div className="flex flex-col space-y-1 mt-4">
                        <label htmlFor="idFuncionario">Funcionario:</label>
                        <select
                            name="idFuncionario"
                            id="idFuncionario"
                            value={data.idFuncionario}
                            onChange={(e) => setData('idFuncionario', e.target.value)} required>
                            <option disabled>Selecione um funcionario</option>
                            {usePage().props.funcionarios.map((funcionario) => (
                                <option key={funcionario.idFuncionario} value={funcionario.idFuncionario}>
                                    {funcionario.nomeCompleto}
                                </option>
                            ))}
                        </select>
                        <span className="text-red-500 mt-2">{errors.idFuncionario}</span>
                    </div>
                    <div className="flex flex-col space-y-1 mt-4" >
                        <label htmlFor="idEscala">Escala:</label>
                        <select
                            name="idEscala"
                            id="idEscala"
                            value={data.idEscala}
                            onChange={(e) => setData('idEscala', e.target.value)} required
                        >
                            <option disabled>Selecione uma escala</option>
                            {usePage().props.escalas.map((escala) => (
                                <option key={escala.idEscala} value={escala.idEscala}>
                                    {escala.data} && {escala.horarioPosto}
                                </option>
                            ))}
                        </select>
                        <span className="text-red-500 mt-2">{errors.idEscala}</span>
                    </div>
                    <button className="px-4 py-2 rounded-lg mt-4 bg-blue-600 text-white hover:bg-blue-400">Adicionar</button>
                </form>
            </div>
        </>
    )
}