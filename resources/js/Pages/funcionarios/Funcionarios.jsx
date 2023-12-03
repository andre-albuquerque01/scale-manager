import { Head, usePage } from '@inertiajs/react';
import pencil from '../../../img/pencil.gif'
import trash from '../../../img/lixo.gif'
import NavBar from '@/Components/NavBar';
import Footer from '@/Components/Footer';

export default function Funcionarios() {
    const { funcionarios } = usePage().props;

    return (
        <div className="">
            <Head title="Funcionarios" />
            <NavBar />
            <div className="">
                <div className="mt-6 ml-16">
                    <div className='mt-2 font-bold'>
                        <h1>Funcionario</h1>
                    </div>
                    <div className="flex items-center mt-1 mb-10 font-normal">
                        <table className="w-2/3 text-center">
                            <thead>
                                <tr className='border bg-blue-200'>
                                    <th>Nome Completo</th>
                                    <th>CPF</th>
                                    <th>E-mail</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>{funcionarios.nomeCompleto}</td>
                                    <td>{funcionarios.cpf}</td>
                                    <td>{funcionarios.email}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="mt-6 ml-16">
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
                                                {funcEscala.nomeCompleto}
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
                <div className="mt-6 ml-16">
                    <div className='mt-2 font-bold'>
                        <h1>Afastamento</h1>
                    </div>
                    <div className="flex items-center mt-1 mb-10 font-normal">
                        <table className="w-2/3 text-center">
                            <thead>
                                <tr className='border bg-blue-200'>
                                    <th>Périodo</th>
                                    <th>Motivo</th>
                                    <th>Funcionario</th>
                                    <th>Editar</th>
                                    <th>Remover</th>
                                </tr>
                            </thead>
                            <tbody>
                                {usePage().props.afatamento.map((afastamento, index) => (
                                    <tr key={index}>
                                        <td>
                                            {afastamento.periodo}
                                        </td>
                                        <td>
                                            {afastamento.motivo}
                                        </td>
                                        <td>
                                            {afastamento.nomeCompleto}
                                        </td>
                                        <td>
                                            <a href={`EditAfastamento/${afastamento.idAfastamento}`} className="flex items-center justify-center">
                                                <img src={pencil} alt="" width='20px' title='Editar' />
                                            </a>
                                        </td>
                                        <td>
                                            <a href={`deleteAfastamento/${afastamento.idAfastamento}`} className="flex items-center justify-center">
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
