import { Link, usePage } from '@inertiajs/react';
import pencil from '../../img/pencil.gif'
import trash from '../../img/lixo.gif'

export default function Afastamento() {

    return (
        <div className="">
            <div className="">
                <div className="ml-16">
                    <div className='mt-6 font-bold'>
                        <h1>Afastamento</h1>
                    </div>
                    <div className="flex items-center mt-1 mb-10 font-normal">
                        <table className="w-2/3 text-center">
                            <tr className='border bg-blue-200'>
                                <th>Périodo</th>
                                <th>Motivo</th>
                                <th>Funcionario</th>
                                <th>Editar</th>
                                <th>Remover</th>
                            </tr>
                            {usePage().props.afatamento.map((afastamento, index) => (
                                <tr key={index}>
                                    <td>
                                        {afastamento.periodo}
                                    </td>
                                    <td>
                                        {afastamento.motivo}
                                    </td>
                                    <td>
                                        {afastamento.nomeCompleto }
                                    </td>
                                    <td>
                                        <Link href={`EditAfastamento/${afastamento.idAfastamento}`} className="flex items-center justify-center">
                                            <img src={pencil} alt="" width='20px' title='Editar' />
                                        </Link>
                                    </td>
                                    <td>
                                        <a href={`deleteAfastamento/${afastamento.idAfastamento}`} className="flex items-center justify-center">
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
