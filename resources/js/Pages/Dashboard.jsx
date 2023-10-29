import { Head } from '@inertiajs/react';
import NavBar from '@/Components/NavBar';

import Posto from '@/Components/Posto';
import Afastamento from '@/Components/Afastamento';
import Footer from '@/Components/Footer';
import Escala from '@/Components/Escala';
import AlocacaoPosto from '@/Components/AlocacaoPosto';
import AlocacaEscala from '@/Components/AlocacaoEscala';

export default function Dashboard() {

    return (
        <div className="">
            <Head title="Dashboard" />
            <NavBar />
            <div className="">
                <div className="ml-16">
                    <div className='mt-3 font-bold'>
                        <Posto />
                        <Afastamento />
                        <Escala />
                        <AlocacaoPosto />
                        <AlocacaEscala />
                    </div>
                </div>
            </div>
            <div >
                <Footer />
            </div>
        </div>
    );
}
