import { Link, usePage } from '@inertiajs/react';
import pencil from '../../img/pencil.gif'
import trash from '../../img/lixo.gif'

export default function AlocacaoPosto() {

    return (
        <div className="">
            <div className="">
                <div className="ml-16">
                    <div className='mt-3 font-bold'>
                        <h1>Alocação Posto</h1>
                    </div>
                    <div className="flex items-center mt-1 font-normal">
                        <table className="w-2/3 text-center">
                            <tr className='border bg-blue-200'>
                                <th>Funcionario</th>
                                <th>Local</th>
                                <th>Função</th>
                                <th>Horario do posto</th>
                                <th>Editar sala</th>
                                <th>Remover sala</th>
                            </tr>
                            {usePage().props.funcionarioPosto.map((funcPosto, index) => (
                                <tr key={index}>
                                    <td>{funcPosto.nomeCompleto}</td>
                                    <td>{funcPosto.local}</td>
                                    <td>{funcPosto.funcao}</td>
                                    <td>{funcPosto.horarioPosto}</td>
                                    <td><a href={`EditFuncPosto/${funcPosto.idFuncionario_has_posto}`} className="flex items-center justify-center">
                                        <img src={pencil} alt="" width='20px' title='Editar' />
                                    </a>
                                    </td>
                                    <td><a href={`deleteFuncPosto/${funcPosto.idFuncionario_has_posto}`} className="flex items-center justify-center">
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
