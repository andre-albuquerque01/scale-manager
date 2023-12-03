import { Head, Link, usePage } from '@inertiajs/react';
import pencil from '../../../img/pencil.gif'
import trash from '../../../img/lixo.gif'
import NavBar from '@/Components/NavBar';
import Footer from '@/Components/Footer';

export default function Escala() {

    return (
        <div className="">
            <Head title="Posto" />
            <NavBar />
            <div className="">
                <div className="mt-6 ml-16">
                    <div className='underline italic'>
                        <Link href='/cadastroEscala' title='Cadastro da alocação da escala' className="text-blue-400">Cadastrar escala</Link>
                    </div>
                    <div className='mt-2 font-bold'>
                        <h1>Escala</h1>
                    </div>
                    <div className="flex items-center mt-1 font-normal">
                        <table className="w-2/3  text-center">
                            <thead>
                                <tr className='border bg-blue-200'>
                                    <th>Horário da Escala</th>
                                    <th>Data</th>
                                    <th>Posto</th>
                                    <th>Editar</th>
                                    <th>Remover</th>
                                </tr>
                            </thead>
                            <tbody>
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
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <div className='bottom-0 fixed w-full'>
                <Footer />
            </div>
        </div>
    );
}
