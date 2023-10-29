import { usePage } from "@inertiajs/react";
import pencil from '../../img/pencil.gif'
import trash from '../../img/lixo.gif'

export default function Posto() {
    const { posto } = usePage().props;
    return (
        <div className="">
            <div className="">
                <div className="ml-16">
                    <div className='mt-6 font-bold'>
                        <h1>Posto</h1>
                    </div>
                    <div className="flex items-center mt-1 mb-10 font-normal">
                        <table className="w-2/3 text-center">
                            <tr className='border bg-blue-200'>
                                <th>Local</th>
                                <th>Função</th>
                                <th>Horario do posto</th>
                                <th>#</th>
                                <th>#</th>
                            </tr>
                            {posto.map((posto, index) => (
                                <tr key={index}>
                                    <td>{posto.local}</td>
                                    <td>{posto.funcao}</td>
                                    <td>{posto.horarioPosto}</td>
                                    <td><a href={`editPosto/${posto.idPosto}`} className="flex items-center justify-center">
                                        <img src={pencil} alt="" width='20px' title='Editar' />
                                    </a>
                                    </td>
                                    <td><a href={`deletePosto/${posto.idPosto}`} className="flex items-center justify-center">
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
