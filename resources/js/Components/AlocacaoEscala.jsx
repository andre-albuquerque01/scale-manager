import { Link, usePage } from '@inertiajs/react';
import pencil from '../../img/pencil.gif'
import trash from '../../img/lixo.gif'

export default function AlocacaEscala() {

    return (
        <div className="">
            <div className="">
                <div className="ml-16">
                    <div className='mt-3 font-bold'>
                        <h1>Alocação Escala</h1>
                    </div>
                    <div className="flex items-center mt-1 font-normal">
                        <table className="w-2/3 text-center">
                            <tr className='border bg-blue-200'>
                                <th>Funcionario</th>
                                <th>Horario da Escala</th>
                                <th>Data</th>
                                <th>Local</th>
                                <th>Função</th>
                                <th>Editar sala</th>
                                <th>Remover sala</th>
                            </tr>
                            {usePage().props.funcionarioEscala.map((funcEscala, index) => (
                                <tr key={index}>
                                    <td>{funcEscala.nomeCompleto}</td>
                                    <td>{funcEscala.horarioPosto}</td>
                                    <td>{funcEscala.data}</td>
                                    <td>{funcEscala.local}</td>
                                    <td>{funcEscala.funcao}</td>
                                    <td><a href={`EditFuncEscala/${funcEscala.idFuncionario_has_escala}`} className="flex items-center justify-center">
                                        <img src={pencil} alt="" width='20px' title='Editar' />
                                    </a>
                                    </td>
                                    <td><a href={`deleteFuncEscala/${funcEscala.idFuncionario_has_escala}`} className="flex items-center justify-center">
                                        <img src={trash} alt="" width='20px' title='Remover' />
                                    </a>
                                    </td>
                                </tr>
                            ))}
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}
