import { Head, Link, usePage } from "@inertiajs/react";
import pencil from '../../../img/pencil.gif'
import trash from '../../../img/lixo.gif'
import NavBar from "@/Components/NavBar";
import Footer from "@/Components/Footer";

export default function Posto() {
    const { posto } = usePage().props;
    return (
        <div className="">
            <Head title="Posto" />
            <NavBar />
            <div className="">
            <div className="mt-6 ml-16">
                    <div className='underline italic'>
                        <Link href='/cadastroPosto' title='Cadastro da alocação do posto' className="text-blue-400">Cadastrar posto</Link>
                    </div>
                    <div className='mt-2 font-bold'>
                        <h1>Posto</h1>
                    </div>
                    <div className="flex items-center mt-1 mb-10 font-normal">
                        <table className="w-2/3 text-center">
                            <thead>
                                <tr className='border bg-blue-200'>
                                    <th>Local</th>
                                    <th>Função</th>
                                    <th>Horario do posto</th>
                                    <th>#</th>
                                    <th>#</th>
                                </tr>
                            </thead>
                            <tbody>
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
