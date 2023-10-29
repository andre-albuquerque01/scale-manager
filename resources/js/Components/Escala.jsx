import { Link, usePage } from '@inertiajs/react';
import pencil from '../../img/pencil.gif'
import trash from '../../img/lixo.gif'

export default function Escala() {

    return (
        <div className="">
            <div className="">
                <div className="ml-16">
                    <div className='mt-6 font-bold'>
                        <h1>Escala</h1>
                    </div>
                    <div className="flex items-center mt-1 font-normal">
                        <table className="w-2/3  text-center">
                            <tr className='border bg-blue-200'>
                                <th>Horário da Escala</th>
                                <th>Data</th>
                                <th>Posto</th>
                                <th>Editar aluno</th>
                                <th>Remover aluno</th>
                            </tr>
                            {usePage().props.escala.map((escala, index) => (
                                <tr key={index}>
                                    <td>
                                        {escala.horarioPosto}
                                    </td>
                                    <td>
                                        {escala.data}
                                    </td>
                                    <td>
                                        {escala.funcao}
                                    </td>
                                    <td>
                                        <Link href={`editEscala/${escala.idEscala}`} className="flex items-center justify-center">
                                            <img src={pencil} alt="" width='20px' title='Editar' />
                                        </Link>
                                    </td>
                                    <td>
                                        <a href={`deleteEscala/${escala.idEscala}`} className="flex items-center justify-center">
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
