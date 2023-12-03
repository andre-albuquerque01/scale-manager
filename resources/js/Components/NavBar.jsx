import { Link, useForm } from "@inertiajs/react";

export default function NavBar() {
    return (
        <header>
            <div className='flex justify-between items-center p-5 border-b-2'>
                <div className='w-1/2'>
                    <h1 className='font-bold'>
                        <Link href="/dashboard">Prestadora de serviços</Link>
                    </h1>
                </div>
                <nav className='w-1/2'>
                    <ul className='list-none flex justify-evenly items-center'>
                        <li className="hover:underline"><Link href="/posto">Posto</Link></li>
                        <li className="hover:underline"><Link href="/escala">Escala</Link></li>
                        <li className="hover:underline"><Link href="/funcionarioPosto">Alocação Posto</Link></li>
                        <li className="hover:underline"><Link href="/funcionarioEscala">Alocação Escala</Link></li>
                        <li className="hover:underline"><Link href="/EditRegistro">Perfil</Link></li>
                        <li className="hover:underline"><Link href="/logout">Sair</Link></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}