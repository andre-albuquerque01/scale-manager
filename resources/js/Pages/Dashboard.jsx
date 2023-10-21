import { Head } from '@inertiajs/react';
import NavBar from '@/Components/NavBar';

import Posto from '@/Components/Posto';
import Footer from '@/Components/Footer';

export default function Dashboard() {

    return (
        <div className="">
            <Head title="Dashboard" />
            <NavBar />
            <div className="">
                <div className="ml-16">
                    <div className='mt-3 font-bold'>
                       <Posto />
                    </div>
                </div>
            </div>
            <div className='bottom-0 fixed w-full'>
                <Footer />
            </div>
        </div>
    );
}
