import { Head, Link, usePage } from '@inertiajs/react';
import pencil from '../../../img/pencil.gif'
import trash from '../../../img/lixo.gif'
import NavBar from '@/Components/NavBar';
import Footer from '@/Components/Footer';

export default function AlocacaoEscala() {

    return (
        <div className="">
            <Head title="Alocação" />
            <NavBar />
            <div className="">
                <div className="mt-6 ml-16">
                    <div className='underline italic'>
                        <Link href='/CadastroFuncEscala' title='Cadastro da alocação da escala' className="text-blue-400">Alocar escala</Link>
                    </div>
                    <div className='mt-2 font-bold'>
                        <h1>Alocação Escala</h1>
                    </div>
                    <div className="flex items-center mt-1 font-normal">
                        <table className="w-2/3 text-center">
                            <thead>
                                <tr className='border bg-blue-200'>
                                    <th>Funcionario</th>
                                    <th>Horario da Escala</th>
                                    <th>Data</th>
                                    <th>Local</th>
                                    <th>Função</th>
                                    <th>Editar</th>
                                    <th>Remover</th>
                                </tr>
                            </thead>
                            <tbody>
                                {usePage().props.funcionarioEscala.map((funcEscala, index) => (
                                    <tr key={index}>
                                        <td>
                                            <a href={`funcionario/${funcEscala.idFuncionario}`} className="flex items-center justify-center underline text-blue-300">
                                                {funcEscala.nomeCompleto}
                                            </a>
                                        </td>
                                        <td>{funcEscala.horarioPosto}</td>
                                        <td>{funcEscala.data}</td>
                                        <td>{funcEscala.local}</td>
                                        <td>{funcEscala.funcao}</td>
                                        <td>
                                            <a href={`EditFuncEscala/${funcEscala.idFuncionario_has_escala}`} className="flex items-center justify-center">
                                                <img src={pencil} alt="" width='20px' title='Editar' />
                                            </a>
                                        </td>
                                        <td>
                                            <a href={`deleteFuncEscala/${funcEscala.idFuncionario_has_escala}`} className="flex items-center justify-center">
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
