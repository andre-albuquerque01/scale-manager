import { Head } from '@inertiajs/react';
import NavBar from '@/Components/NavBar';
import Afastamento from '@/Pages/afastamento/Afastamento';
import Footer from '@/Components/Footer';

export default function Dashboard() {

    return (
        <div className="">
            <Head title="Dashboard" />
            <NavBar />
            <div className="">
                <div>
                    <div className='mt-3'>
                        <Afastamento />
                    </div>
                </div>
            </div>
            <div className='bottom-0 fixed w-full'>
                <Footer />
            </div>
        </div>
    );
}
