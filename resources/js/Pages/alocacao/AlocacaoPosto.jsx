import { Head, Link, usePage } from '@inertiajs/react';
import pencil from '../../../img/pencil.gif'
import trash from '../../../img/lixo.gif'
import NavBar from '@/Components/NavBar';
import Footer from '@/Components/Footer';

export default function AlocacaoPosto() {

    return (
        <div className="">
            <Head title="Alocação" />
            <NavBar />
            <div className="">
                <div className="mt-6 ml-16">
                    <div className='underline italic'>
                        <Link href='/CadastroFuncPosto' title='Cadastro da alocação do posto' className="text-blue-400">Alocar posto</Link>
                    </div>
                    <div className='mt-2 font-bold'>
                        <h1>Alocação Posto</h1>
                    </div>
                    <div className="flex items-center mt-1 font-normal">
                        <table className="w-2/3 text-center">
                            <thead>
                                <tr className='border bg-blue-200'>
                                    <th>Funcionario</th>
                                    <th>Local</th>
                                    <th>Função</th>
                                    <th>Horario do posto</th>
                                    <th>Editar</th>
                                    <th>Remover</th>
                                </tr>
                            </thead>
                            <tbody>
                                {usePage().props.funcionarioPosto.map((funcPosto, index) => (
                                    <tr key={index}>
                                        <td>
                                            <a href={`funcionario/${funcPosto.idFuncionario}`} className="flex items-center justify-center">
                                                {funcPosto.nomeCompleto}
                                            </a>
                                        </td>
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
